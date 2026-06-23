"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidAdapter = void 0;
class UuidAdapter {
    static getANewUUID() {
        return crypto.randomUUID();
    }
}
exports.UuidAdapter = UuidAdapter;
//# sourceMappingURL=uuid.js.map