import fs from 'fs';
/**
 * Temporary until we have V2 IPFS cache.
 */
export class V2StaticFileSubgraphProvider {
    constructor() { }
    async getPools() {
        const poolsSanitized = JSON.parse(fs.readFileSync('./v2pools.json', 'utf8'));
        return poolsSanitized;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWZpbGUtc3ViZ3JhcGgtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3YyL3N0YXRpYy1maWxlLXN1YmdyYXBoLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUdwQjs7R0FFRztBQUNILE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsZ0JBQWUsQ0FBQztJQUVULEtBQUssQ0FBQyxRQUFRO1FBQ25CLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQy9CLEVBQUUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQ3RCLENBQUM7UUFFdEIsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztDQUNGIn0=