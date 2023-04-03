import * as React from "react";
import classnames from "classnames";
import css from "./Table.module.scss";

export interface TableProps {
  children?: React.ReactNode;
}

export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (props: TableProps, ref: React.Ref<HTMLDivElement>) => {
    const tableItems = [
      {
        name: "Liam James",
        email: "liamjames@example.com",
        position: "Software engineer",
        salary: "$100K",
      },
      {
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        position: "Product designer",
        salary: "$90K",
      },
      {
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        position: "Front-end developer",
        salary: "$80K",
      },
      {
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        position: "Laravel engineer",
        salary: "$120K",
      },
      {
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        position: "Open source manager",
        salary: "$75K",
      },
    ];

    return (
      <div className={classnames(css.TableContainer)} ref={ref}>
        <div className={css.TableWrap}>
          <table className={css.Table}>
            <thead className={css.TableHead}>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Position</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody className={css.TableBody}>
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);

Table.displayName = "Table";
