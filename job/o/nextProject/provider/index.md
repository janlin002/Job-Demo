```ts
import { ReactNode, useMemo, useState } from "react";
import { useFormik } from "formik";
import { SELECT_INIT, CreateTestContext, Step } from "./context";

export const CreateTestProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(Step.select);
  const formik = useFormik({
    initialValues: SELECT_INIT,
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  const updateSelect = <Key extends keyof typeof SELECT_INIT>(
    key: Key,
    value: (typeof SELECT_INIT)[Key]
  ) => {
    formik.setFieldValue(key, value);
  };

  const contextValue = useMemo(
    () => ({
      step,
      select: formik.values,
      updateSelect,
      setStep,
      // handleSubmit: formik.handleSubmit,
    }),
    [formik.values, updateSelect, formik.handleSubmit, setStep]
  );

  return (
    <CreateTestContext.Provider value={contextValue}>
      {children}
    </CreateTestContext.Provider>
  );
};
```
