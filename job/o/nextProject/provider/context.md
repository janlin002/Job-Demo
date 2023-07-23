```ts
import { Dispatch, SetStateAction, createContext, useContext } from "react";
import dayjs from "dayjs";
import { RepeatType, Subject } from "@/types/enums";
import { UserDetail } from "@/types/user";
import { Class } from "@/types/classes";

export enum Step {
  select,
  setting,
  completed,
}

export enum Target {
  classes = "classes",
  students = "students",
}

export type Select = {
  target: Target;
  school: string;
  grade: string;
  class: string;
  studentNumber: string;
};

const today = dayjs();

export const SELECT_INIT: Select = {
  target: Target.classes,
  school: "",
  grade: "",
  class: "",
  studentNumber: "",
};

export type TCreateTestContext = {
  step: Step;
  select: Select;
  updateSelect: <T extends keyof Select>(key: T, value: Select[T]) => void;
  setStep: Dispatch<SetStateAction<Step>>;
};

export const CreateTestContext = createContext<TCreateTestContext>({
  step: Step.select,
  select: SELECT_INIT,
  updateSelect: () => {},
  setStep: () => {},
});

export const useCreateTestContext = () => useContext(CreateTestContext);
```
