CREATE TABLE users (
id SERIAL PRIMARY KEY,
username varchar(50),
password varchar(300)
);

CREATE TABLE students (
id SERIAL PRIMARY KEY,
firstname varchar(30) NOT NULL,
lastname varchar(30),
dob date,
age integer NOT NULL,
insurance BOOLEAN,
medical BOOLEAN,
appointment BOOLEAN,
primarylanguage varchar(50)
);

CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  name varchar(90) NOT NULL,
  lowerage integer NOT NULL,
  upperage integer NOT NULL,
  language varchar(20),
  available BOOLEAN
);

CREATE TABLE concerns (
  id SERIAL PRIMARY KEY,
  concern varchar(50)
);

CREATE TABLE tests_concerns (
tests_id integer NOT NULL REFERENCES tests,
concerns_id integer NOT NULL REFERENCES concerns
);

CREATE TABLE students_concerns (
students_id integer NOT NULL REFERENCES students,
concerns_id integer NOT NULL REFERENCES concerns
);

INSERT INTO students
VALUES
(1, 'Maria', 'Ruiz', '2010/09/20', 6, TRUE, TRUE, TRUE),
(2, 'Zoe', 'Santiago', '2009/08/20', 7, TRUE, TRUE, TRUE),
(3, 'Sydney', 'Williams', '2008/07/20', 8, TRUE, TRUE, TRUE),
(4, 'Madison', 'Williams', '2007/07/10', 9, TRUE, TRUE, TRUE),
(5, 'Kimberly', 'Jackson', '2006/06/20', 10, TRUE, TRUE, TRUE),
(6, 'Wyatt', 'Peterson', '2003/05/01', 13, TRUE, TRUE, TRUE),
(7, 'Jacob', 'Casey', '2012/04/28', 4, TRUE, TRUE, TRUE),
(8, 'Andrew', 'Wang', '2011/03/01', 5, TRUE, TRUE, TRUE),
(9, 'Adam', 'Coffey', '2011/02/20', 5, TRUE, TRUE, TRUE),
(10, 'Catherine', 'Johnson', '2011/01/20', 5, TRUE, TRUE, TRUE)
;


INSERT INTO tests
VALUES
(1,	'Peabody Picture Vocabulary Test-4;Form A (PPVT-4)', 6, 99, 'English', TRUE),
(2,	'Expressive Vocabulary Test-2; Form A (EVT-2)', 6, 99, 'English', TRUE),
(3,	'Ross Information Processing Assessment-Primary',	5, 12, 'English',	TRUE),
(4,	'Differential Screening Test for Processing',	6, 12, 'English', TRUE),
(5,	'Test of Auditory Processing Skills',	4, 18, 'English',	TRUE),
(6,	'Executive Functions Test Elementary', 7, 12, 'English',	TRUE),
(7,	'Preschool Language Scale-5 (PLS-5)', 0, 7, 'English',	TRUE),
(8,	'Oral and Written Language Scales-II, LC/OE (OWLS-II)',	3, 21, 'English',	TRUE),
(9,	'Clinical Evaluation of Language Fundamentals-4 (CELF-4)', 5, 21, 'English',	TRUE),
(10, 'Clinical Evaluation of Language Fundamentals-5 (CELF-5)',	5, 21, 'English',	TRUE),
(11, 'Test of Language Development Primary-4 (TOLD P;4)', 4, 8, 'English',	TRUE),
(12, 'Test of Language Development Inter-4 (TOLD I;4)',	8, 17, 'English',	TRUE),
(13, 'Test of Early Language Development-3 (TELD-3)',	2, 7, 'English',	TRUE),
(14, 'Receptive-Expressive Emergent Language Test (REEL-3)', 0, 2, 'English',	TRUE),
(15, 'Listening Comprehension Test-2', 6, 11, 'English', TRUE),
(16, 'Test of Pragmatic Language-2 (TOPL-2)',	6, 18, 'English',	TRUE),
(17, 'Test of Problem Solving-3 (TOPS-3)', 6, 12, 'English',	TRUE),
(18, 'Social Language Development Test-Elementary (SLDT-E)', 6, 11, 'English',	TRUE),
(19, 'Goldman Fristoe Test of Articulation-2 (GFTA-2)',	2, 21, 'English',	TRUE),
(20, 'Goldman Fristoe Test of Articulation-2 (GFTA-3)',	2, 21, 'English',	TRUE),
(21, 'Hodson Assess of Phonological Patterns-3 (HAPP-3)',	3, 8, 'English',	TRUE),
(22, 'Kaufman Speech Praxis Test for Children',	2, 5, 'English',	TRUE),
(23, 'Diagnostic Evaluation of Language Variation (DELV)', 4, 12, 'English',	TRUE),
(24, 'Bilingual English-Spanish Assessment (BESA)', 4, 6, 'Spanish', TRUE),
(25, 'Contextual Probes of Articulation Competence-Spanish (CPAC-S)',	3, 99, 'English',TRUE),
(26, 'Voice Assessment Protocol for Children & Adults',	4, 18, 'English',	TRUE),
(27, 'Stuttering Severity Instrument-4 (SSI-4)', 10, 99, 'English',	TRUE)
;

INSERT INTO concerns
VALUES
  (1,	'Language'),
  (2,	'Articulation'),
  (3,	'Pragmatics'),
  (4,	'Fluency'),
  (5,	'Voice');

INSERT INTO students_concerns
VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 1),
(5, 2),
(6, 3),
(7, 1),
(8, 3),
(9, 1),
(9, 4),
(10, 1),
(10, 5);

INSERT INTO tests_concerns
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 1),
  (6, 1),
  (7, 1),
  (8, 1),
  (9, 1),
  (10, 1),
  (11, 1),
  (12, 1),
  (13, 1),
  (14, 1),
  (15, 1),
  (16, 3),
  (17, 3),
  (18, 3),
  (19, 2),
  (20, 2),
  (21, 2),
  (22, 2),
  (23, 1),
  (24, 2),
  (24, 1),
  (25, 2),
  (26, 5),
  (27, 4)
;



-- SELECT * FROM tests WHERE lowerage <= 8 AND upperage >=8;

SELECT * from tests
JOIN tests_concerns ON
tests_concerns.tests_id = tests.id;

SELECT * from tests
JOIN tests_concerns ON
tests_concerns.tests_id = tests.id
WHERE concerns_id = 2
AND lowerage <= 10 AND upperage >=10;

SELECT * FROM students
JOIN students_concerns ON
students_concerns.students_id = students.id;

SELECT * FROM students
JOIN students_concerns ON
students_concerns.students_id = students.id
WHERE lastname = 'Williams';

SELECT * FROM students
JOIN students_concerns ON
students_concerns.students_id = students.id
WHERE concerns_id = 5;
