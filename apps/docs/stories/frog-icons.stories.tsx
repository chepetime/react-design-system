/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import * as UIcons from "@chepe/icons";

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
          <UIcons.AppleKeyboardCommand {...iconArgs} />
          <UIcons.Apps {...iconArgs} />
          <UIcons.AppsBox {...iconArgs} />
          <UIcons.ArrowExpandAll {...iconArgs} />
          <UIcons.ArrowTopRightThick {...iconArgs} />
          <UIcons.Attachment {...iconArgs} />
          <UIcons.BagPersonalOutline {...iconArgs} />
          <UIcons.BagSuitcase {...iconArgs} />
          <UIcons.BagSuitcaseOutline {...iconArgs} />
          <UIcons.Baguette {...iconArgs} />
          <UIcons.Bookmark {...iconArgs} />
          <UIcons.BookmarkMultiple {...iconArgs} />
          <UIcons.BookmarkMultipleOutline {...iconArgs} />
          <UIcons.BookmarkOutline {...iconArgs} />
          <UIcons.Cart {...iconArgs} />
          <UIcons.CartHeart {...iconArgs} />
          <UIcons.CartOutline {...iconArgs} />
          <UIcons.CodeArray {...iconArgs} />
          <UIcons.CodeBraces {...iconArgs} />
          <UIcons.CodeBracesBox {...iconArgs} />
          <UIcons.CodeBrackets {...iconArgs} />
          <UIcons.CodeEqual {...iconArgs} />
          <UIcons.CodeGreaterThan {...iconArgs} />
          <UIcons.CodeGreaterThanOrEqual {...iconArgs} />
          <UIcons.CodeJson {...iconArgs} />
          <UIcons.CodeLessThan {...iconArgs} />
          <UIcons.CodeLessThanOrEqual {...iconArgs} />
          <UIcons.CodeNotEqual {...iconArgs} />
          <UIcons.CodeNotEqualVariant {...iconArgs} />
          <UIcons.CodeParentheses {...iconArgs} />
          <UIcons.CodeParenthesesBox {...iconArgs} />
          <UIcons.CodeTags {...iconArgs} />
          <UIcons.Coffee {...iconArgs} />
          <UIcons.CoffeeMaker {...iconArgs} />
          <UIcons.CoffeeMakerCheck {...iconArgs} />
          <UIcons.CoffeeMakerCheckOutline {...iconArgs} />
          <UIcons.CoffeeMakerOutline {...iconArgs} />
          <UIcons.CoffeeOff {...iconArgs} />
          <UIcons.CoffeeOffOutline {...iconArgs} />
          <UIcons.CoffeeOutline {...iconArgs} />
          <UIcons.CoffeeToGo {...iconArgs} />
          <UIcons.CoffeeToGoOutline {...iconArgs} />
          <UIcons.Coffin {...iconArgs} />
          <UIcons.Email {...iconArgs} />
          <UIcons.Git {...iconArgs} />
          <UIcons.Github {...iconArgs} />
          <UIcons.Halloween {...iconArgs} />
          <UIcons.Home {...iconArgs} />
          <UIcons.HomeVariant {...iconArgs} />
          <UIcons.HomeVariantOutline {...iconArgs} />
          <UIcons.Human {...iconArgs} />
          <UIcons.HumanChild {...iconArgs} />
          <UIcons.HumanGreetingVariant {...iconArgs} />
          <UIcons.HumanMale {...iconArgs} />
          <UIcons.IceCream {...iconArgs} />
          <UIcons.Inbox {...iconArgs} />
          <UIcons.InboxOutline {...iconArgs} />
          <UIcons.Instagram {...iconArgs} />
          <UIcons.Island {...iconArgs} />
          <UIcons.Jellyfish {...iconArgs} />
          <UIcons.JellyfishOutline {...iconArgs} />
          <UIcons.Linkedin {...iconArgs} />
          <UIcons.Linux {...iconArgs} />
          <UIcons.Lungs {...iconArgs} />
          <UIcons.Mailbox {...iconArgs} />
          <UIcons.MailboxOpen {...iconArgs} />
          <UIcons.MailboxOpenOutline {...iconArgs} />
          <UIcons.MailboxOpenUp {...iconArgs} />
          <UIcons.MailboxOpenUpOutline {...iconArgs} />
          <UIcons.MailboxOutline {...iconArgs} />
          <UIcons.MailboxUp {...iconArgs} />
          <UIcons.MailboxUpOutline {...iconArgs} />
          <UIcons.Map {...iconArgs} />
          <UIcons.MapMarker {...iconArgs} />
          <UIcons.MapMarkerOutline {...iconArgs} />
          <UIcons.MapMarkerStar {...iconArgs} />
          <UIcons.MapMarkerStarOutline {...iconArgs} />
          <UIcons.MapMinus {...iconArgs} />
          <UIcons.MapOutline {...iconArgs} />
          <UIcons.MapPlus {...iconArgs} />
          <UIcons.MapSearch {...iconArgs} />
          <UIcons.MapSearchOutline {...iconArgs} />
          <UIcons.MarkerCheck {...iconArgs} />
          <UIcons.Meditation {...iconArgs} />
          <UIcons.Memory {...iconArgs} />
          <UIcons.MixedReality {...iconArgs} />
          <UIcons.Molecule {...iconArgs} />
          <UIcons.NintendoGameBoy {...iconArgs} />
          <UIcons.NintendoSwitch {...iconArgs} />
          <UIcons.Nodejs {...iconArgs} />
          <UIcons.Npm {...iconArgs} />
          <UIcons.Paperclip {...iconArgs} />
          <UIcons.Passport {...iconArgs} />
          <UIcons.PassportBiometric {...iconArgs} />
          <UIcons.Rabbit {...iconArgs} />
          <UIcons.RadioTower {...iconArgs} />
          <UIcons.React {...iconArgs} />
          <UIcons.Twitter {...iconArgs} />
          <UIcons.Ufo {...iconArgs} />
          <UIcons.UfoOutline {...iconArgs} />
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
