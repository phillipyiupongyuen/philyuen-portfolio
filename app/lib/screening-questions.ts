export type ScreeningQuestion = {
  short: string;
  full: string;
};

export const questionBank: ScreeningQuestion[] = [
  {
    short: 'Scaling under pressure',
    full: 'Tell me about a time you scaled a product quickly. How did you keep quality high while growing fast?',
  },
  {
    short: 'Healthcare: speed vs. safety',
    full: "In clinical software, people's health depends on what you ship. How do you balance shipping fast with getting it right?",
  },
  {
    short: 'Entering a new market',
    full: "Walk me through how you'd approach taking a product into a new market.",
  },
];
