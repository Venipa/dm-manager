import { PluginConstructor } from '@yamdbf/core';
import { DMManager } from './DMManager';
declare const dmManager: (guild: string, defaultChannel: string, category?: string) => PluginConstructor;
export { dmManager };
export { DMManager };
export default dmManager;
