import React from "react";
import classnames from "classnames";
import css from "./Stepper.module.scss";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps = [],
  currentStep = 0,
  onStepChange,
}) => {
  const handleStepClick = (step: number) => {
    onStepChange(step);
  };

  return (
    <div className={css.Stepper}>
      {steps.map((step, index) => {
        const stepClasses = classnames(css.Step, {
          [css.Completed]: index < currentStep,
          [css.Current]: index === currentStep,
        });

        return (
          <div
            className={stepClasses}
            key={step}
            onClick={() => handleStepClick(index)}
          >
            <div className={css.Circle}>{index + 1}</div>
            <div className={css.Label}>{step}</div>
          </div>
        );
      })}
    </div>
  );
};

Stepper.displayName = "Stepper";
