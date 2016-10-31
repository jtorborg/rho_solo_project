CREATE TABLE students (
id SERIAL PRIMARY KEY,
firstname varchar(30) NOT NULL,
lastname varchar(30),
dob date,
age integer NOT NULL,
concern varchar(50),
insurance BOOLEAN,
medical BOOLEAN,
appointment BOOLEAN
);

CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  name varchar(90) NOT NULL,
  category varchar(90),
  lowerage integer NOT NULL,
  upperage integer NOT NULL,
  available BOOLEAN
);


INSERT INTO tests
VALUES
(1,	'Peabody Picture Vocabulary Test-4;Form A (PPVT-4)',	'Language',	6, 99,	TRUE),
(2,	'Expressive Vocabulary Test-2; Form A (EVT-2)', 	'Language',	6, 99,	TRUE),
(3,	'Ross Information Processing Assessment-Primary',	'Language',	5, 12,	TRUE),
(4,	'Differential Screening Test for Processing',	'Language',	6, 12,	TRUE),
(5,	'Test of Auditory Processing Skills',	'Language',	4, 18,	TRUE),
(6,	'Executive Functions Test Elementary',	'Language',	7, 12,	TRUE),
(7,	'Preschool Language Scale-5 (PLS-5)', 	'Language',	0, 7,	TRUE),
(8,	'Oral and Written Language Scales-II, LC/OE (OWLS-II)',	'Language',	3, 21,	TRUE),
(9,	'Clinical Evaluation of Language Fundamentals-4 (CELF-4)',	'Language',	5, 21,	TRUE),
(10,	'Clinical Evaluation of Language Fundamentals-5 (CELF-5)',	'Language',	5, 21,	TRUE),
(11,	'Test of Language Development Primary-4 (TOLD P;4)', 	'Language',	4, 8,	TRUE),
(12,	'Test of Language Development Inter-4 (TOLD I;4)',	'Language',	8, 17,	TRUE),
(13,	'Test of Early Language Development-3 (TELD-3)',	'Language',	2, 7,	TRUE),
(14,	'Receptive-Expressive Emergent Language Test (REEL-3)',	'Language',	0, 2,	TRUE),
(15,	'Listening Comprehension Test-2',	'Language',	6, 11, TRUE),
(16,	'Test of Pragmatic Language-2 (TOPL-2)',	'Pragmatics',	6, 18,	TRUE),
(17,	'Test of Problem Solving-3 (TOPS-3)',	'Pragmatics',	6, 12,	TRUE),
(18,	'Social Language Development Test-Elementary (SLDT-E)',	'Pragmatics',	6, 11,	TRUE),
(19,	'Goldman Fristoe Test of Articulation-2 (GFTA-2)',	'Articulation',	2, 21,	TRUE),
(20,	'Goldman Fristoe Test of Articulation-2 (GFTA-3)',	'Articulation',	2, 21,	TRUE),
(21,	'Hodson Assess of Phonological Patterns-3 (HAPP-3)',	'Articulation',	3, 8,	TRUE),
(22,	'Kaufman Speech Praxis Test for Children',	'Articulation',	2, 5,	TRUE),
(23,	'Diagnostic Evaluation of Language Variation (DELV)',	'Articulation',	4, 12,	TRUE),
(24,	'Dialect Sensitive Language Test',	'Articulation',	0, 99,	TRUE),
(25,	'Bilingual English-Spanish Assessment (BESA)', 'Articulation', 4, 6, TRUE),
(26, 'Contextual Probes of Articulation Competence-Spanish (CPAC-S)',	'Articulation',	3, 99, TRUE),
(27,	'Voice Assessment Protocol for Children & Adults',	'Articulation',	4, 18,	TRUE),
(28,	'Stuttering Severity Instrument-4 (SSI-4)',	'Articulation',	10, 99,	TRUE)
;






CREATE TABLE users (
id SERIAL PRIMARY KEY,
username varchar(50),
password varchar(300)
);


-- SELECT * FROM tests WHERE lowerage <= 8 AND upperage >=8;
