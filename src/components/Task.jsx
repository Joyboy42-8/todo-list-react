import { Circle, CircleCheckBig, X } from "lucide-react";
import { useState } from "react";

export default function Task({ task }) {
  const [deleted, setDeleted] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    setDeleted(!deleted);
  };
  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <article className="Task">
      <div className="TaskContent">
        {checked ? (
          <CircleCheckBig
            onClick={handleCheck}
            className="text-accent"
          />
        ) : (
          <Circle onClick={handleCheck} />
        )}
        <p className="tooltip">
          <span className="tooltip-content">
            {task.task}
          </span>
          <span className="TaskTitle">
            {checked ? (
              <del className="Accomplished">
                {task.task}
              </del>
            ) : (
              task.task
            )}
          </span>
        </p>
      </div>

      {/* Statut de la tache */}
      <div>
        {deleted ? (
          <span className="BadgeError">
            Supprimée
          </span>
        ) : (
          <span className="BadgeSuccess">
            A Faire
          </span>
        )}
      </div>

      <div className="TaskContent">
        <p className="DateDisplay">{task.date}</p>
        <X
          size={24}
          onClick={handleDelete}
          className={`${
            deleted ? "text-red-500" : ""
          }`}
        />
      </div>
    </article>
  );
}