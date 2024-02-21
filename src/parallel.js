import { cpus } from "os";

export const Parallel = {
    maxParallel: Math.max(1, cpus().length),
    pending: [],
    active: new Set(),
    acquire() {
        let deferedResolve;
        let promise = new Promise((resolve) => { deferedResolve = resolve });
        this.pending.push(deferedResolve);
        this.tryDrainQueue();
        return promise;
    },
    tryDrainQueue() {
        while (this.pending.length > 0 && this.active.size < this.maxParallel) {
            const deferedResolve = this.pending.shift();
            const handle = {};
            this.active.add(handle);
            deferedResolve(handle);
        }
    },
    release(handle) {
        this.active.delete(handle);
        process.nextTick(() => this.tryDrainQueue());
    },
    async run(f) {
        const handle = await Parallel.acquire();
        const result = await f();
        Parallel.release(handle);
        return result;
    },
    wrap(f) {
        return async function(...args) {
            const handle = await Parallel.acquire();
            const result = await f.apply(this, args);
            Parallel.release(handle);
            return result;
        };
    },
    map(arr, cb) {
        return Promise.all(arr.map(this.wrap(cb)));
    }
};
