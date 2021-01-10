// 여기가 커스텀 웹팩.
const withImages = require("next-images");
module.exports = withImages({
    webpack(config) {
        config.resolve.modules.push(__dirname); // 추가
        return config;
    },
});
