import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/plots";

const FlowUsage = () => {
    const config = {
        percent: 0.55,
        range: {
            color: "l(0) 0:#B8E1FF 1:#3D76DD"
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: "36px",
                    color: "#4B535E"
                },
                formatter: () => "55%"
            },
            content: {
                style: {
                    fontSize: "24px",
                    lineHeight: "24px",
                    color: "#4B535E",
                },
                formatter: () => "Flow Usage"
            }
        }
    };
    return <Gauge {...config} style={{ backgroundColor: "#1f1f1f"}}/>;
};

export default FlowUsage;
