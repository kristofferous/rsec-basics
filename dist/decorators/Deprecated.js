export default function Deprecated(reason) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.warn(`The ${target.constructor.name}#${key} method is deprecated: ${reason}`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
