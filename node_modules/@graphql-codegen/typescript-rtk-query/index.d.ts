import { Types, PluginValidateFn, PluginFunction } from '@graphql-codegen/plugin-helpers';
import { RTKQueryVisitor } from './visitor';
import { RTKQueryRawPluginConfig } from './config';
export declare const plugin: PluginFunction<RTKQueryRawPluginConfig, Types.ComplexPluginOutput>;
export declare const validate: PluginValidateFn<any>;
export { RTKQueryVisitor };
