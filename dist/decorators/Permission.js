import { getGrantedPermissions, Permissions } from "../../enum/Permissions.js";
export function RequiresPermission(requiredPermission) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const grantedPermissions = getGrantedPermissions(this.permissions);
            if (grantedPermissions.includes(requiredPermission)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error(`Permission ${Permissions[requiredPermission]} is required.`);
            }
        };
    };
}
