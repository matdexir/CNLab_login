import React, { useState, useEffect } from "react";
import { Liquid } from "@ant-design/plots";

const Usage = () => {
    const config = {
        percent: 0.50,
        shape: function (x, y, width, height) {
            const r = width / 4;
            const dx = x - width / 2;
            const dy = y - height / 2;
            return [
                ["M", dx, dy + r * 2],
                ["A", r, r, 0, 0, 1, x, dy + r],
                ["A", r, r, 0, 0, 1, dx + width, dy + r * 2],
                ["L", x, dy + height],
                ["L", dx, dy + r * 2],
                ["Z"]
            ];
        },
        outline: {
            border: 1,
            distance: 2
        },
        wave: {
            length: 128
        }
    };
    return <Liquid {...config} />;
};

export default Usage;
