var pairs =
{
"stop":{"terracotta":1}
,"terracotta":{"management":1}
,"management":{"console":1}
,"console":{"following":1,"stop":1,"run":1}
,"following":{"procedure":1,"command":1}
,"procedure":{"stop":1}
,"run":{"following":1}
,"command":{"unix":1}
,"unix":{"management-console\u002Fbin\u002Fstop-tmc.sh":1}
,"management-console\u002Fbin\u002Fstop-tmc.sh":{"windows":1}
,"windows":{"management-console\u002Fbin\u002Fstop.bat":1}
}
;Search.control.loadWordPairs(pairs);
