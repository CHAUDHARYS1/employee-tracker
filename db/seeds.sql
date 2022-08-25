INSERT INTO departments (name)
VALUES
  ('operations'),
  ('engineering'),
  ('service'),
  ('warehouse'),
  ('executive');

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 2),
  ('Charles', 'LeRoi', 2, 3),
  ('Katherine', 'Mansfield', 2, 5),
  ('Dora', 'Carrington', 3, 2),
  ('Edward', 'Bellamy', 3, 2),
  ('Montague', 'Summers', 3, 2),
  ('Octavia', 'Butler', 3, 2),
  ('Unica', 'Zurn', 4, 4);

INSERT INTO roles (role_title, salary, department_id)
VALUES
  ('Salesperson', 60000 , 1),
  ('Lead Engineer', 100000, 2),
  ('Junior Engineer', 60000, 2),
  ('Manager', 80000, 1),
  ('Senior Manager', 90000, 1),
  ('Service Coordinator', 50000, 3),
  ('Project Coordinator', 50000, 1),
  ('Recieving', 20000, 4),
  ('CEO', 120000, 5);



 