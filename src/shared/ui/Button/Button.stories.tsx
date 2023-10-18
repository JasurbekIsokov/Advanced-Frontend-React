import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonTheme } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Button",
  component: Button,
  // component: Test qilingan komponent. Storybook ko'rsatuvchi oynasi uchun
  // test qilingan komponentni aniqlaydi.

  argTypes: {
    backgroundColor: { control: "color" },
  },
  // argTypes: Komponentning argumentlarini tavsiflash uchun ishlatiladi. Misol uchun, bu yerda "backgroundColor" argumenti komponentni xususiy rangini o'zgartirish uchun ishlatiladi.
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// Template: Komponentni ko'rsatuvchi funksiya. Ushbu funksiya qo'shilgan komponentni interfeysda ko'rsatish uchun ishlatiladi.

// ComponentStory va ComponentMeta obyektlari: Bu obyektlar Storybook
// komponentlarini yaratish va tavsiflashda foydalaniladi. ComponentStory
// komponentlarni yaratishda ishlatiladi, ComponentMeta esa komponentlarning
// tavsifi uchun foydalaniladi.

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

// Primary, Clear, Outline, va OutlineDark: Bu, ko'rsatuvchi versiyalari (story) bo'lgan komponentlar. Ularning har biri bir xususiy tema (ButtonTheme) va "children" nomli yerga joylashtirilgan tekst bilan tanimlangan. Bu komponentlar ko'rsatuvchi oynasida namoyish etiladi va ularga xususiy xususiyatlar berilgan.

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
// OutlineDark.decorators: Ushbu qismat, "OutlineDark" versiyasini o'zgartirilgan temaga (Theme.DARK) o'zgartirish uchun ishlatiladi. Tema o'zgartirilgan versiyasini sinash uchun foydalaniladi.
