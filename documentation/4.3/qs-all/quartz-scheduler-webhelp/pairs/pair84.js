var pairs =
{
"how-to":{"find":1}
,"find":{"triggers":1}
,"triggers":{"job":1}
,"job":{"finding":1,"list":1}
,"finding":{"triggers":1}
,"list":{"<trigger>":1}
,"<trigger>":{"jobtriggers":1}
,"jobtriggers":{"=sched.gettriggersofjob":1}
,"=sched.gettriggersofjob":{"(jobkey":1}
,"(jobkey":{"jobname":1}
,"jobname":{"jobgroup":1}
,"jobgroup":{"\u0022))":1}
}
;Search.control.loadWordPairs(pairs);
