import { IV2SubgraphProvider, V2SubgraphPool } from './subgraph-provider';
/**
 * Temporary until we have V2 IPFS cache.
 */
export declare class V2StaticFileSubgraphProvider implements IV2SubgraphProvider {
    constructor();
    getPools(): Promise<V2SubgraphPool[]>;
}
