"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DMManager_1 = require("./DMManager");
function dmManagerFactory(guild, defaultChannel, category) {
    return class extends DMManager_1.DMManager {
        constructor(client) {
            super(client, guild, defaultChannel, category);
        }
    };
}
exports.dmManagerFactory = dmManagerFactory;

//# sourceMappingURL=dmManagerFactory.js.map
