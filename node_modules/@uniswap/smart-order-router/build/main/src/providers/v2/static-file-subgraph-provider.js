"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2StaticFileSubgraphProvider = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Temporary until we have V2 IPFS cache.
 */
class V2StaticFileSubgraphProvider {
    constructor() { }
    async getPools() {
        const poolsSanitized = JSON.parse(fs_1.default.readFileSync('./v2pools.json', 'utf8'));
        return poolsSanitized;
    }
}
exports.V2StaticFileSubgraphProvider = V2StaticFileSubgraphProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWZpbGUtc3ViZ3JhcGgtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3YyL3N0YXRpYy1maWxlLXN1YmdyYXBoLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUdwQjs7R0FFRztBQUNILE1BQWEsNEJBQTRCO0lBQ3ZDLGdCQUFlLENBQUM7SUFFVCxLQUFLLENBQUMsUUFBUTtRQUNuQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUMvQixZQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUN0QixDQUFDO1FBRXRCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQVZELG9FQVVDIn0=