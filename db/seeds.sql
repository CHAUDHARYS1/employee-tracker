INSERT INTO departments (department_name)
VALUES
  ('operations'),
  ('engineering'),
  ('service'),
  ('warehouse'),
  ('executive');

INSERT INTO employees (first_name, last_name, roles_id)
VALUES
  ('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 1),
  ('Piers', 'Gaveston', 1),
  ('Charles', 'LeRoi', 2),
  ('Katherine', 'Mansfield', 2),
  ('Dora', 'Carrington', 3),
  ('Edward', 'Bellamy', 3),
  ('Montague', 'Summers', 3),
  ('Octavia', 'Butler', 3),
  ('Unica', 'Zurn', 4);

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



 