CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"study_class" TEXT NOT NULL,
	"token" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"student_id" integer NOT NULL,
	"question" TEXT NOT NULL,
	"tags" TEXT NOT NULL,
	"submitted_at" timestamp with time zone NOT NULL,
	"score" integer NOT NULL,
	"answered" BOOLEAN NOT NULL,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "answers" (
	"id" serial NOT NULL,
	"question_id" integer NOT NULL,
	"student_id" integer NOT NULL,
	"answered_at" timestamp with time zone NOT NULL,
	"answer" TEXT NOT NULL,
	CONSTRAINT "answers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("student_id") REFERENCES "users"("id");

ALTER TABLE "answers" ADD CONSTRAINT "answers_fk0" FOREIGN KEY ("question_id") REFERENCES "questions"("id");
ALTER TABLE "answers" ADD CONSTRAINT "answers_fk1" FOREIGN KEY ("student_id") REFERENCES "users"("id");



