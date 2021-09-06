INSERT INTO department (department_name)
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
  ('Salesperson', 1000 , 1),
  ('Lead Engineer', 1000, 2),
  ('Junior Engineer', 1000, 2),
  ('Manager', 1000, 1),
  ('Senior Manager', 1000, 1),
  ('Service Coordinator', 1000, 3),
  ('Project Coordinator', 1000, 1),
  ('Recieving', 1000, 4),
  ('CEO', 1000, 5);



 