export const bigbiStyles = {
  button: {
    primary:
      "bg-primary! text-primary-foreground! border border-line-tertiary! rounded-md px-4 py-5 text-body-medium! leading-6 cursor-pointer hover:bg-white hover:brightness-125",

    secondary:
      "bg-secondary! text-secondary-foreground! border border-line-tertiary! rounded-md px-4 py-5 text-body-medium! leading-6 cursor-pointer hover:bg-surface-quaternary! hover:brightness-125",

    ghost:
      "bg-transparent text-ink-secondary rounded-md px-4 py-5 text-body-medium! leading-6 cursor-pointer hover:bg-white/5 hover:brightness-125",

    carousel:
      "bg-surface-quaternary/60! backdrop-blur-[1px] cursor-pointer rounded-full border-none text-ink-primary disabled:pointer-events-none disabled:opacity-0 [--spacing:0.44rem] [&_svg]:h-6! [&_svg]:w-8! lg:[--spacing:0.55rem] lg:[&_svg]:h-8! lg:[&_svg]:w-8!",
  },

  input:
    "bg-surface-tertiary! text-ink-primary border border-line-tertiary! rounded-md p-2.5 min-h-10 text-body-large! placeholder:text-ink-tertiary!",

  textarea:
    "bg-surface-tertiary! text-ink-primary border border-line-tertiary! rounded-md p-2.5 min-h-24 text-body-large! placeholder:text-ink-tertiary!",

  toggle: "border border-[#FFFFFF15] bg-action-secondary-surface! w-8.25! h-5! rounded-[100px] data-checked:bg-brand-surface! **:data-[slot=switch-thumb]:bg-white! **:data-[slot=switch-thumb]:size-3.5 **:data-[slot=switch-thumb]:data-unchecked:translate-x-0.75 **:data-[slot=switch-thumb]:data-checked:translate-x-full cursor-pointer",
}