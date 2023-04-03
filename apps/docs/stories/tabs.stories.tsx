/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Tabs, TabElement, TabsProps } from "@chepe/ui/src";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: TabsProps) => (
    <div>
      <Tabs>
        <TabElement
          id="overview"
          onClick={() => console.log("clicked the overview tab")}
        >
          Overview
        </TabElement>
        <TabElement
          id="integration"
          onClick={() => console.log("clicked the integration tab")}
        >
          Integration
        </TabElement>
        <TabElement
          id="billing"
          onClick={() => console.log("clicked the billing tab")}
        >
          Billing
        </TabElement>
        <TabElement
          id="transactions"
          onClick={() => console.log("clicked the transactions tab")}
        >
          Transactions
        </TabElement>
        <TabElement
          id="plans"
          onClick={() => console.log("clicked the plans tab")}
        >
          Plans
        </TabElement>
      </Tabs>
      {/* We might need to create a TabPane element to match Tabs + Windows  */}
      <div style={{ padding: "2rem" }}>
        <div id="overview">Overview</div>
        <div id="integration">Integration</div>
        <div id="billing">Billing</div>
        <div id="transactions">Transactions</div>
        <div id="plans">Plans</div>
      </div>
    </div>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
