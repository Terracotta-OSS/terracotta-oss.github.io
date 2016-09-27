var pairs =
{
"cluster":{"events":1,"topology":1,"cache":1}
,"events":{"cluster":1,"api":1,"related":1}
,"api":{"provides":1}
,"provides":{"access":1}
,"access":{"terracotta":1}
,"terracotta":{"cluster":1}
,"topology":{"event-notification":1}
,"event-notification":{"mechanism":1}
,"mechanism":{"reports":1}
,"reports":{"events":1}
,"related":{"nodes":1}
,"nodes":{"terracotta":1}
,"cache":{"events":1}
}
;Search.control.loadWordPairs(pairs);
