import React from "react";
import * as chepeIcons from "@chepe/icons";

export default {
  title: "@chepe/icons",
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
          <chepeIcons.AppleKeyboardCommand {...iconArgs} />
          <chepeIcons.Apps {...iconArgs} />
          <chepeIcons.AppsBox {...iconArgs} />
          <chepeIcons.ArrowExpandAll {...iconArgs} />
          <chepeIcons.ArrowTopRightThick {...iconArgs} />
          <chepeIcons.Attachment {...iconArgs} />
          <chepeIcons.BagPersonalOutline {...iconArgs} />
          <chepeIcons.BagSuitcase {...iconArgs} />
          <chepeIcons.BagSuitcaseOutline {...iconArgs} />
          <chepeIcons.Baguette {...iconArgs} />
          <chepeIcons.Bookmark {...iconArgs} />
          <chepeIcons.BookmarkMultiple {...iconArgs} />
          <chepeIcons.BookmarkMultipleOutline {...iconArgs} />
          <chepeIcons.BookmarkOutline {...iconArgs} />
          <chepeIcons.Cart {...iconArgs} />
          <chepeIcons.CartHeart {...iconArgs} />
          <chepeIcons.CartOutline {...iconArgs} />
          <chepeIcons.CodeArray {...iconArgs} />
          <chepeIcons.CodeBraces {...iconArgs} />
          <chepeIcons.CodeBracesBox {...iconArgs} />
          <chepeIcons.CodeBrackets {...iconArgs} />
          <chepeIcons.CodeEqual {...iconArgs} />
          <chepeIcons.CodeGreaterThan {...iconArgs} />
          <chepeIcons.CodeGreaterThanOrEqual {...iconArgs} />
          <chepeIcons.CodeJson {...iconArgs} />
          <chepeIcons.CodeLessThan {...iconArgs} />
          <chepeIcons.CodeLessThanOrEqual {...iconArgs} />
          <chepeIcons.CodeNotEqual {...iconArgs} />
          <chepeIcons.CodeNotEqualVariant {...iconArgs} />
          <chepeIcons.CodeParentheses {...iconArgs} />
          <chepeIcons.CodeParenthesesBox {...iconArgs} />
          <chepeIcons.CodeTags {...iconArgs} />
          <chepeIcons.Coffee {...iconArgs} />
          <chepeIcons.CoffeeMaker {...iconArgs} />
          <chepeIcons.CoffeeMakerCheck {...iconArgs} />
          <chepeIcons.CoffeeMakerCheckOutline {...iconArgs} />
          <chepeIcons.CoffeeMakerOutline {...iconArgs} />
          <chepeIcons.CoffeeOff {...iconArgs} />
          <chepeIcons.CoffeeOffOutline {...iconArgs} />
          <chepeIcons.CoffeeOutline {...iconArgs} />
          <chepeIcons.CoffeeToGo {...iconArgs} />
          <chepeIcons.CoffeeToGoOutline {...iconArgs} />
          <chepeIcons.Coffin {...iconArgs} />
          <chepeIcons.Email {...iconArgs} />
          <chepeIcons.Git {...iconArgs} />
          <chepeIcons.Github {...iconArgs} />
          <chepeIcons.Halloween {...iconArgs} />
          <chepeIcons.Home {...iconArgs} />
          <chepeIcons.HomeVariant {...iconArgs} />
          <chepeIcons.HomeVariantOutline {...iconArgs} />
          <chepeIcons.Human {...iconArgs} />
          <chepeIcons.HumanChild {...iconArgs} />
          <chepeIcons.HumanGreetingVariant {...iconArgs} />
          <chepeIcons.HumanMale {...iconArgs} />
          <chepeIcons.IceCream {...iconArgs} />
          <chepeIcons.Inbox {...iconArgs} />
          <chepeIcons.InboxOutline {...iconArgs} />
          <chepeIcons.Instagram {...iconArgs} />
          <chepeIcons.Island {...iconArgs} />
          <chepeIcons.Jellyfish {...iconArgs} />
          <chepeIcons.JellyfishOutline {...iconArgs} />
          <chepeIcons.Linkedin {...iconArgs} />
          <chepeIcons.Linux {...iconArgs} />
          <chepeIcons.Lungs {...iconArgs} />
          <chepeIcons.Mailbox {...iconArgs} />
          <chepeIcons.MailboxOpen {...iconArgs} />
          <chepeIcons.MailboxOpenOutline {...iconArgs} />
          <chepeIcons.MailboxOpenUp {...iconArgs} />
          <chepeIcons.MailboxOpenUpOutline {...iconArgs} />
          <chepeIcons.MailboxOutline {...iconArgs} />
          <chepeIcons.MailboxUp {...iconArgs} />
          <chepeIcons.MailboxUpOutline {...iconArgs} />
          <chepeIcons.Map {...iconArgs} />
          <chepeIcons.MapMarker {...iconArgs} />
          <chepeIcons.MapMarkerOutline {...iconArgs} />
          <chepeIcons.MapMarkerStar {...iconArgs} />
          <chepeIcons.MapMarkerStarOutline {...iconArgs} />
          <chepeIcons.MapMinus {...iconArgs} />
          <chepeIcons.MapOutline {...iconArgs} />
          <chepeIcons.MapPlus {...iconArgs} />
          <chepeIcons.MapSearch {...iconArgs} />
          <chepeIcons.MapSearchOutline {...iconArgs} />
          <chepeIcons.MarkerCheck {...iconArgs} />
          <chepeIcons.Meditation {...iconArgs} />
          <chepeIcons.Memory {...iconArgs} />
          <chepeIcons.MixedReality {...iconArgs} />
          <chepeIcons.Molecule {...iconArgs} />
          <chepeIcons.NintendoGameBoy {...iconArgs} />
          <chepeIcons.NintendoSwitch {...iconArgs} />
          <chepeIcons.Nodejs {...iconArgs} />
          <chepeIcons.Npm {...iconArgs} />
          <chepeIcons.Paperclip {...iconArgs} />
          <chepeIcons.Passport {...iconArgs} />
          <chepeIcons.PassportBiometric {...iconArgs} />
          <chepeIcons.Rabbit {...iconArgs} />
          <chepeIcons.RadioTower {...iconArgs} />
          <chepeIcons.React {...iconArgs} />
          <chepeIcons.Twitter {...iconArgs} />
          <chepeIcons.Ufo {...iconArgs} />
          <chepeIcons.UfoOutline {...iconArgs} />
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
