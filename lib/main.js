"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Layout_1 = __importDefault(require("./view/Layout"));
const Dashboard_1 = __importDefault(require("./view/Dashboard"));
const Mining_1 = __importDefault(require("./view/Mining"));
const Buyback_1 = __importDefault(require("./view/Buyback"));
const Hourglass_1 = __importDefault(require("./view/Hourglass"));
(async () => {
    skyrouter_1.SkyRouter.route("**", Layout_1.default);
    skyrouter_1.SkyRouter.route("", Dashboard_1.default);
    skyrouter_1.SkyRouter.route("mining", Mining_1.default);
    skyrouter_1.SkyRouter.route("buyback", Buyback_1.default);
    skyrouter_1.SkyRouter.route("hourglass", Hourglass_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map