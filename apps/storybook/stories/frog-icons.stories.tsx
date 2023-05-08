/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import * as CustomIcons from "@chepe/icons";

export default {
  title: "@chepe/icons",
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => {
    const iconArgs = {
      ...args,
      width: args.size,
      height: args.size,
    };
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem",
            borderRadius: "1.5rem",
            background: "#ddd",
          }}
        >
          <CustomIcons.AppleKeyboardCommand {...iconArgs} />
          <CustomIcons.Apps {...iconArgs} />
          <CustomIcons.AppsBox {...iconArgs} />
          <CustomIcons.ArrowExpandAll {...iconArgs} />
          <CustomIcons.ArrowTopRightThick {...iconArgs} />
          <CustomIcons.Attachment {...iconArgs} />
          <CustomIcons.BagPersonalOutline {...iconArgs} />
          <CustomIcons.BagSuitcase {...iconArgs} />
          <CustomIcons.BagSuitcaseOutline {...iconArgs} />
          <CustomIcons.Baguette {...iconArgs} />
          <CustomIcons.Bookmark {...iconArgs} />
          <CustomIcons.BookmarkMultiple {...iconArgs} />
          <CustomIcons.BookmarkMultipleOutline {...iconArgs} />
          <CustomIcons.BookmarkOutline {...iconArgs} />
          <CustomIcons.Cart {...iconArgs} />
          <CustomIcons.CartHeart {...iconArgs} />
          <CustomIcons.CartOutline {...iconArgs} />
          <CustomIcons.CodeArray {...iconArgs} />
          <CustomIcons.CodeBraces {...iconArgs} />
          <CustomIcons.CodeBracesBox {...iconArgs} />
          <CustomIcons.CodeBrackets {...iconArgs} />
          <CustomIcons.CodeEqual {...iconArgs} />
          <CustomIcons.CodeGreaterThan {...iconArgs} />
          <CustomIcons.CodeGreaterThanOrEqual {...iconArgs} />
          <CustomIcons.CodeJson {...iconArgs} />
          <CustomIcons.CodeLessThan {...iconArgs} />
          <CustomIcons.CodeLessThanOrEqual {...iconArgs} />
          <CustomIcons.CodeNotEqual {...iconArgs} />
          <CustomIcons.CodeNotEqualVariant {...iconArgs} />
          <CustomIcons.CodeParentheses {...iconArgs} />
          <CustomIcons.CodeParenthesesBox {...iconArgs} />
          <CustomIcons.CodeTags {...iconArgs} />
          <CustomIcons.Coffee {...iconArgs} />
          <CustomIcons.CoffeeMaker {...iconArgs} />
          <CustomIcons.CoffeeMakerCheck {...iconArgs} />
          <CustomIcons.CoffeeMakerCheckOutline {...iconArgs} />
          <CustomIcons.CoffeeMakerOutline {...iconArgs} />
          <CustomIcons.CoffeeOff {...iconArgs} />
          <CustomIcons.CoffeeOffOutline {...iconArgs} />
          <CustomIcons.CoffeeOutline {...iconArgs} />
          <CustomIcons.CoffeeToGo {...iconArgs} />
          <CustomIcons.CoffeeToGoOutline {...iconArgs} />
          <CustomIcons.Coffin {...iconArgs} />
          <CustomIcons.Email {...iconArgs} />
          <CustomIcons.Git {...iconArgs} />
          <CustomIcons.Github {...iconArgs} />
          <CustomIcons.Halloween {...iconArgs} />
          <CustomIcons.Home {...iconArgs} />
          <CustomIcons.HomeVariant {...iconArgs} />
          <CustomIcons.HomeVariantOutline {...iconArgs} />
          <CustomIcons.Human {...iconArgs} />
          <CustomIcons.HumanChild {...iconArgs} />
          <CustomIcons.HumanGreetingVariant {...iconArgs} />
          <CustomIcons.HumanMale {...iconArgs} />
          <CustomIcons.IceCream {...iconArgs} />
          <CustomIcons.Inbox {...iconArgs} />
          <CustomIcons.InboxOutline {...iconArgs} />
          <CustomIcons.Instagram {...iconArgs} />
          <CustomIcons.Island {...iconArgs} />
          <CustomIcons.Jellyfish {...iconArgs} />
          <CustomIcons.JellyfishOutline {...iconArgs} />
          <CustomIcons.Linkedin {...iconArgs} />
          <CustomIcons.Linux {...iconArgs} />
          <CustomIcons.Lungs {...iconArgs} />
          <CustomIcons.Mailbox {...iconArgs} />
          <CustomIcons.MailboxOpen {...iconArgs} />
          <CustomIcons.MailboxOpenOutline {...iconArgs} />
          <CustomIcons.MailboxOpenUp {...iconArgs} />
          <CustomIcons.MailboxOpenUpOutline {...iconArgs} />
          <CustomIcons.MailboxOutline {...iconArgs} />
          <CustomIcons.MailboxUp {...iconArgs} />
          <CustomIcons.MailboxUpOutline {...iconArgs} />
          <CustomIcons.Map {...iconArgs} />
          <CustomIcons.MapMarker {...iconArgs} />
          <CustomIcons.MapMarkerOutline {...iconArgs} />
          <CustomIcons.MapMarkerStar {...iconArgs} />
          <CustomIcons.MapMarkerStarOutline {...iconArgs} />
          <CustomIcons.MapMinus {...iconArgs} />
          <CustomIcons.MapOutline {...iconArgs} />
          <CustomIcons.MapPlus {...iconArgs} />
          <CustomIcons.MapSearch {...iconArgs} />
          <CustomIcons.MapSearchOutline {...iconArgs} />
          <CustomIcons.MarkerCheck {...iconArgs} />
          <CustomIcons.Meditation {...iconArgs} />
          <CustomIcons.Memory {...iconArgs} />
          <CustomIcons.MixedReality {...iconArgs} />
          <CustomIcons.Molecule {...iconArgs} />
          <CustomIcons.NintendoGameBoy {...iconArgs} />
          <CustomIcons.NintendoSwitch {...iconArgs} />
          <CustomIcons.Nodejs {...iconArgs} />
          <CustomIcons.Npm {...iconArgs} />
          <CustomIcons.Paperclip {...iconArgs} />
          <CustomIcons.Passport {...iconArgs} />
          <CustomIcons.PassportBiometric {...iconArgs} />
          <CustomIcons.Rabbit {...iconArgs} />
          <CustomIcons.RadioTower {...iconArgs} />
          <CustomIcons.React {...iconArgs} />
          <CustomIcons.Twitter {...iconArgs} />
          <CustomIcons.Ufo {...iconArgs} />
          <CustomIcons.UfoOutline {...iconArgs} />
        </div>
      </div>
    );
  },
  args: {
    fill: "#000",
    size: "32px",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
