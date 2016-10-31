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
appointment BOOLEAN
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
)

CREATE TABLE tests_concerns (
id integer,
PRIMARY KEY (tests_id, concerns_id),
tests_id integer NOT NULL REFERENCES tests,
concerns_id integer NOT NULL REFERENCES concerns
);

CREATE TABLE students_concerns (
id integer,
PRIMARY KEY (students_id, concerns_id),
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
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 1),
(5, 5, 2),
(6, 6, 3),
(7, 7, 1),
(8, 8, 3),
(9, 9, 1),
(10, 9, 4),
(11, 10, 1),
(12, 10, 5)

INSERT INTO TABLE tests_concerns
VALUES
  (1,	1, 1),
  (2,	2, 1),
  (3,	3, 1),
  (4,	4, 1),
  (5,	5, 1),
  (6,	6, 1),
  (7,	7, 1),
  (8,	8, 1),
  (9,	9, 1),
  (10, 10, 1),
  (11, 11, 1),
  (12, 12, 1),
  (13, 13, 1),
  (14, 14, 1),
  (15, 15, 1),
  (16, 16, 3),
  (17, 17, 3),
  (18, 18, 3),
  (19, 19, 2),
  (20, 20, 2),
  (21, 21, 2),
  (22, 22, 2),
  (23, 23, 1),
  (24, 24, 2),
  (25, 24, 1),
  (26, 25, 2),
  (27, 26, 5),
  (28, 27, 4)
;


--INSERT INTO STUDENTS_CONCERNS

-- SELECT * FROM tests WHERE lowerage <= 8 AND upperage >=8;

-- INSERT INTO tests
-- VALUES
-- (1,	'Peabody Picture Vocabulary Test-4;Form A (PPVT-4)',	'Language', 'English',	6, 99,	TRUE),
-- (2,	'Expressive Vocabulary Test-2; Form A (EVT-2)', 	'Language', 'English', 6, 99,	TRUE),
-- (3,	'Ross Information Processing Assessment-Primary',	'Language', 'English',	5, 12,	TRUE),
-- (4,	'Differential Screening Test for Processing',	'Language',	'English', 6, 12,	TRUE),
-- (5,	'Test of Auditory Processing Skills',	'Language',	4, 18, 'English',	TRUE),
-- (6,	'Executive Functions Test Elementary',	'Language',	7, 12, 'English',	TRUE),
-- (7,	'Preschool Language Scale-5 (PLS-5)', 	'Language',	0, 7, 'English',	TRUE),
-- (8,	'Oral and Written Language Scales-II, LC/OE (OWLS-II)',	'Language',	3, 21, 'English',	TRUE),
-- (9,	'Clinical Evaluation of Language Fundamentals-4 (CELF-4)',	'Language',	5, 21, 'English',	TRUE),
-- (10, 'Clinical Evaluation of Language Fundamentals-5 (CELF-5)',	'Language',	5, 21, 'English',	TRUE),
-- (11, 'Test of Language Development Primary-4 (TOLD P;4)', 	'Language',	4, 8, 'English',	TRUE),
-- (12, 'Test of Language Development Inter-4 (TOLD I;4)',	'Language',	8, 17, 'English',	TRUE),
-- (13, 'Test of Early Language Development-3 (TELD-3)',	'Language',	2, 7, 'English',	TRUE),
-- (14, 'Receptive-Expressive Emergent Language Test (REEL-3)',	'Language',	0, 2, 'English',	TRUE),
-- (15, 'Listening Comprehension Test-2',	'Language',	6, 11, 'English', TRUE),
-- (16, 'Test of Pragmatic Language-2 (TOPL-2)',	'Pragmatics',	6, 18, 'English',	TRUE),
-- (17, 'Test of Problem Solving-3 (TOPS-3)',	'Pragmatics',	6, 12, 'English',	TRUE),
-- (18, 'Social Language Development Test-Elementary (SLDT-E)',	'Pragmatics',	6, 11, 'English',	TRUE),
-- (19, 'Goldman Fristoe Test of Articulation-2 (GFTA-2)',	'Articulation',	2, 21, 'English',	TRUE),
-- (20, 'Goldman Fristoe Test of Articulation-2 (GFTA-3)',	'Articulation',	2, 21, 'English',	TRUE),
-- (21, 'Hodson Assess of Phonological Patterns-3 (HAPP-3)',	'Articulation',	3, 8, 'English',	TRUE),
-- (22, 'Kaufman Speech Praxis Test for Children',	'Articulation',	2, 5, 'English',	TRUE),
-- (23, 'Diagnostic Evaluation of Language Variation (DELV)',	'Language',	4, 12, 'English',	TRUE),
-- (24, 'Bilingual English-Spanish Assessment (BESA)', 'Articulation', 4, 6, 'Spanish', TRUE),
-- (24, 'Bilingual English-Spanish Assessment (BESA)', 'Language', 4, 6, 'Spanish', TRUE),
--
-- (25, 'Contextual Probes of Articulation Competence-Spanish (CPAC-S)',	'Articulation', 'English',	3, 99, TRUE),
-- (26, 'Voice Assessment Protocol for Children & Adults',	'Voice',	4, 18, 'English',	TRUE),
-- (27, 'Stuttering Severity Instrument-4 (SSI-4)',	'Fluency',	10, 99, 'English',	TRUE)
-- ;
