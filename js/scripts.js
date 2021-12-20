/* variables */

var KEYSTROKE_COUNT = 0

/* constants */

/* elements */
const wallElement = document.getElementById("wall");

/* options */

const MAX_PASSWORD_LENGTH = 32
const MAX_PASSPHRASE_LENGTH = 10

const DEBUG_MODE = false /* turns console log on or off */
const POOL_COUNT = 4
const ENTROPY_POOLS = []
const THOUSAND_WORDS = [ "a","ability","able","about","above","accept","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always","American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge","land","language","large","last","late","later","laugh","law","lawyer","lay","lead","leader","learn","least","leave","left","leg","legal","less","let","letter","level","lie","life","light","like","likely","line","list","listen","little","live","local","long","look","lose","loss","lot","love","low","machine","magazine","main","maintain","major","majority","make","man","manage","management","manager","many","market","marriage","material","matter","may","maybe","me","mean","measure","media","medical","meet","meeting","member","memory","mention","message","method","middle","might","military","million","mind","minute","miss","mission","model","modern","moment","money","month","more","morning","most","mother","mouth","move","movement","movie","Mr","Mrs","much","music","must","my","myself","name","nation","national","natural","nature","near","nearly","necessary","need","network","never","new","news","newspaper","next","nice","night","no","none","nor","north","not","note","nothing","notice","now","n't","number","occur","of","off","offer","office","officer","official","often","oh","oil","ok","old","on","once","one","only","onto","open","operation","opportunity","option","or","order","organization","other","others","our","out","outside","over","own","owner","page","pain","painting","paper","parent","part","participant","particular","particularly","partner","party","pass","past","patient","pattern","pay","peace","people","per","perform","performance","perhaps","period","person","personal","phone","physical","pick","picture","piece","place","plan","plant","play","player","PM","point","police","policy","political","politics","poor","popular","population","position","positive","possible","power","practice","prepare","present","president","pressure","pretty","prevent","price","private","probably","problem","process","produce","product","production","professional","professor","program","project","property","protect","prove","provide","public","pull","purpose","push","put","quality","question","quickly","quite","race","radio","raise","range","rate","rather","reach","read","ready","real","reality","realize","really","reason","receive","recent","recently","recognize","record","red","reduce","reflect","region","relate","relationship","religious","remain","remember","remove","report","represent","Republican","require","research","resource","respond","response","responsibility","rest","result","return","reveal","rich","right","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","scene","school","science","scientist","score","sea","season","seat","second","section","security","see","seek","seem","sell","send","senior","sense","series","serious","serve","service","set","seven","several","sex","sexual","shake","share","she","shoot","short","shot","should","shoulder","show","side","sign","significant","similar","simple","simply","since","sing","single","sister","sit","site","situation","six","size","skill","skin","small","smile","so","social","society","soldier","some","somebody","someone","something","sometimes","son","song","soon","sort","sound","source","south","southern","space","speak","special","specific","speech","spend","sport","spring","staff","stage","stand","standard","star","start","state","statement","station","stay","step","still","stock","stop","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","success","successful","such","suddenly","suffer","suggest","summer","support","sure","surface","system","table","take","talk","task","tax","teach","teacher","team","technology","television","tell","ten","tend","term","test","than","thank","that","the","their","them","themselves","then","theory","there","these","they","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","to","today","together","tonight","too","top","total","tough","toward","town","trade","traditional","training","travel","treat","treatment","tree","trial","trip","trouble","true","truth","try","turn","TV","two","type","under","understand","unit","until","up","upon","us","use","usually","value","various","very","victim","view","violence","visit","voice","vote","wait","walk","wall","want","war","watch","water","way","we","weapon","wear","week","weight","well","west","western","what","whatever","when","where","whether","which","while","white","who","whole","whom","whose","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","word","work","worker","world","worry","would","write","writer","wrong","yard","yeah","year","yes","yet","you","young","your","yourself" ]
const WORDLIST_3K = ["a", "abandon", "ability", "able", "abortion", "about", "above", "abroad", "absence", "absolute", "absolutely", "absorb", "abuse", "academic", "accept", "access", "accident", "accompany", "accomplish", "according", "account", "accurate", "accuse", "achieve", "achievement", "acid", "acknowledge", "acquire", "across", "act", "action", "active", "activist", "activity", "actor", "actress", "actual", "actually", "ad", "adapt", "add", "addition", "additional", "address", "adequate", "adjust", "adjustment", "administration", "administrator", "admire", "admission", "admit", "adolescent", "adopt", "adult", "advance", "advanced", "advantage", "adventure", "advertising", "advice", "advise", "adviser", "advocate", "affair", "affect", "afford", "afraid", "African", "African-American", "after", "afternoon", "again", "against", "age", "agency", "agenda", "agent", "aggressive", "ago", "agree", "agreement", "agricultural", "ah", "ahead", "aid", "aide", "AIDS", "aim", "air", "aircraft", "airline", "airport", "album", "alcohol", "alive", "all", "alliance", "allow", "ally", "almost", "alone", "along", "already", "also", "alter", "alternative", "although", "always", "AM", "amazing", "American", "among", "amount", "analysis", "analyst", "analyze", "ancient", "and", "anger", "angle", "angry", "animal", "anniversary", "announce", "annual", "another", "answer", "anticipate", "anxiety", "any", "anybody", "anymore", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "apparent", "apparently", "appeal", "appear", "appearance", "apple", "application", "apply", "appoint", "appointment", "appreciate", "approach", "appropriate", "approval", "approve", "approximately", "Arab", "architect", "area", "argue", "argument", "arise", "arm", "armed", "army", "around", "arrange", "arrangement", "arrest", "arrival", "arrive", "art", "article", "artist", "artistic", "as", "Asian", "aside", "ask", "asleep", "aspect", "assault", "assert", "assess", "assessment", "asset", "assign", "assignment", "assist", "assistance", "assistant", "associate", "association", "assume", "assumption", "assure", "at", "athlete", "athletic", "atmosphere", "attach", "attack", "attempt", "attend", "attention", "attitude", "attorney", "attract", "attractive", "attribute", "audience", "author", "authority", "auto", "available", "average", "avoid", "award", "aware", "awareness", "away", "awful", "baby", "back", "background", "bad", "badly", "bag", "bake", "balance", "ball", "ban", "band", "bank", "bar", "barely", "barrel", "barrier", "base", "baseball", "basic", "basically", "basis", "basket", "basketball", "bathroom", "battery", "battle", "be", "beach", "bean", "bear", "beat", "beautiful", "beauty", "because", "become", "bed", "bedroom", "beer", "before", "begin", "beginning", "behavior", "behind", "being", "belief", "believe", "bell", "belong", "below", "belt", "bench", "bend", "beneath", "benefit", "beside", "besides", "best", "bet", "better", "between", "beyond", "Bible", "big", "bike", "bill", "billion", "bind", "biological", "bird", "birth", "birthday", "bit", "bite", "black", "blade", "blame", "blanket", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bomb", "bombing", "bond", "bone", "book", "boom", "boot", "border", "born", "borrow", "boss", "both", "bother", "bottle", "bottom", "boundary", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brand", "bread", "break", "breakfast", "breast", "breath", "breathe", "brick", "bridge", "brief", "briefly", "bright", "brilliant", "bring", "British", "broad", "broken", "brother", "brown", "brush", "buck", "budget", "build", "building", "bullet", "bunch", "burden", "burn", "bury", "bus", "business", "busy", "but", "butter", "button", "buy", "buyer", "by", "cabin", "cabinet", "cable", "cake", "calculate", "call", "camera", "camp", "campaign", "campus", "can", "Canadian", "cancer", "candidate", "cap", "capability", "capable", "capacity", "capital", "captain", "capture", "car", "carbon", "card", "care", "career", "careful", "carefully", "carrier", "carry", "case", "cash", "cast", "cat", "catch", "category", "Catholic", "cause", "ceiling", "celebrate", "celebration", "celebrity", "cell", "center", "central", "century", "CEO", "ceremony", "certain", "certainly", "chain", "chair", "chairman", "challenge", "chamber", "champion", "championship", "chance", "change", "changing", "channel", "chapter", "character", "characteristic", "characterize", "charge", "charity", "chart", "chase", "cheap", "check", "cheek", "cheese", "chef", "chemical", "chest", "chicken", "chief", "child", "childhood", "Chinese", "chip", "chocolate", "choice", "cholesterol", "choose", "Christian", "Christmas", "church", "cigarette", "circle", "circumstance", "cite", "citizen", "city", "civil", "civilian", "claim", "class", "classic", "classroom", "clean", "clear", "clearly", "client", "climate", "climb", "clinic", "clinical", "clock", "close", "closely", "closer", "clothes", "clothing", "cloud", "club", "clue", "cluster", "coach", "coal", "coalition", "coast", "coat", "code", "coffee", "cognitive", "cold", "collapse", "colleague", "collect", "collection", "collective", "college", "colonial", "color", "column", "combination", "combine", "come", "comedy", "comfort", "comfortable", "command", "commander", "comment", "commercial", "commission", "commit", "commitment", "committee", "common", "communicate", "communication", "community", "company", "compare", "comparison", "compete", "competition", "competitive", "competitor", "complain", "complaint", "complete", "completely", "complex", "complicated", "component", "compose", "composition", "comprehensive", "computer", "concentrate", "concentration", "concept", "concern", "concerned", "concert", "conclude", "conclusion", "concrete", "condition", "conduct", "conference", "confidence", "confident", "confirm", "conflict", "confront", "confusion", "Congress", "congressional", "connect", "connection", "consciousness", "consensus", "consequence", "conservative", "consider", "considerable", "consideration", "consist", "consistent", "constant", "constantly", "constitute", "constitutional", "construct", "construction", "consultant", "consume", "consumer", "consumption", "contact", "contain", "container", "contemporary", "content", "contest", "context", "continue", "continued", "contract", "contrast", "contribute", "contribution", "control", "controversial", "controversy", "convention", "conventional", "conversation", "convert", "conviction", "convince", "cook", "cookie", "cooking", "cool", "cooperation", "cop", "cope", "copy", "core", "corn", "corner", "corporate", "corporation", "correct", "correspondent", "cost", "cotton", "couch", "could", "council", "counselor", "count", "counter", "country", "county", "couple", "courage", "course", "court", "cousin", "cover", "coverage", "cow", "crack", "craft", "crash", "crazy", "cream", "create", "creation", "creative", "creature", "credit", "crew", "crime", "criminal", "crisis", "criteria", "critic", "critical", "criticism", "criticize", "crop", "cross", "crowd", "crucial", "cry", "cultural", "culture", "cup", "curious", "current", "currently", "curriculum", "custom", "customer", "cut", "cycle", "dad", "daily", "damage", "dance", "danger", "dangerous", "dare", "dark", "darkness", "data", "date", "daughter", "day", "dead", "deal", "dealer", "dear", "death", "debate", "debt", "decade", "decide", "decision", "deck", "declare", "decline", "decrease", "deep", "deeply", "deer", "defeat", "defend", "defendant", "defense", "defensive", "deficit", "define", "definitely", "definition", "degree", "delay", "deliver", "delivery", "demand", "democracy", "Democrat", "democratic", "demonstrate", "demonstration", "deny", "department", "depend", "dependent", "depending", "depict", "depression", "depth", "deputy", "derive", "describe", "description", "desert", "deserve", "design", "designer", "desire", "desk", "desperate", "despite", "destroy", "destruction", "detail", "detailed", "detect", "determine", "develop", "developing", "development", "device", "devote", "dialogue", "die", "diet", "differ", "difference", "different", "differently", "difficult", "difficulty", "dig", "digital", "dimension", "dining", "dinner", "direct", "direction", "directly", "director", "dirt", "dirty", "disability", "disagree", "disappear", "disaster", "discipline", "discourse", "discover", "discovery", "discrimination", "discuss", "discussion", "disease", "dish", "dismiss", "disorder", "display", "dispute", "distance", "distant", "distinct", "distinction", "distinguish", "distribute", "distribution", "district", "diverse", "diversity", "divide", "division", "divorce", "DNA", "do", "doctor", "document", "dog", "domestic", "dominant", "dominate", "door", "double", "doubt", "down", "downtown", "dozen", "draft", "drag", "drama", "dramatic", "dramatically", "draw", "drawing", "dream", "dress", "drink", "drive", "driver", "drop", "drug", "dry", "due", "during", "dust", "duty", "each", "eager", "ear", "early", "earn", "earnings", "earth", "ease", "easily", "east", "eastern", "easy", "eat", "economic", "economics", "economist", "economy", "edge", "edition", "editor", "educate", "education", "educational", "educator", "effect", "effective", "effectively", "efficiency", "efficient", "effort", "egg", "eight", "either", "elderly", "elect", "election", "electric", "electricity", "electronic", "element", "elementary", "eliminate", "elite", "else", "elsewhere", "e-mail", "embrace", "emerge", "emergency", "emission", "emotion", "emotional", "emphasis", "emphasize", "employ", "employee", "employer", "employment", "empty", "enable", "encounter", "encourage", "end", "enemy", "energy", "enforcement", "engage", "engine", "engineer", "engineering", "English", "enhance", "enjoy", "enormous", "enough", "ensure", "enter", "enterprise", "entertainment", "entire", "entirely", "entrance", "entry", "environment", "environmental", "episode", "equal", "equally", "equipment", "era", "error", "escape", "especially", "essay", "essential", "essentially", "establish", "establishment", "estate", "estimate", "etc", "ethics", "ethnic", "European", "evaluate", "evaluation", "even", "evening", "event", "eventually", "ever", "every", "everybody", "everyday", "everyone", "everything", "everywhere", "evidence", "evolution", "evolve", "exact", "exactly", "examination", "examine", "example", "exceed", "excellent", "except", "exception", "exchange", "exciting", "executive", "exercise", "exhibit", "exhibition", "exist", "existence", "existing", "expand", "expansion", "expect", "expectation", "expense", "expensive", "experience", "experiment", "expert", "explain", "explanation", "explode", "explore", "explosion", "expose", "exposure", "express", "expression", "extend", "extension", "extensive", "extent", "external", "extra", "extraordinary", "extreme", "extremely", "eye", "fabric", "face", "facility", "fact", "factor", "factory", "faculty", "fade", "fail", "failure", "fair", "fairly", "faith", "fall", "false", "familiar", "family", "famous", "fan", "fantasy", "far", "farm", "farmer", "fashion", "fast", "fat", "fate", "father", "fault", "favor", "favorite", "fear", "feature", "federal", "fee", "feed", "feel", "feeling", "fellow", "female", "fence", "few", "fewer", "fiber", "fiction", "field", "fifteen", "fifth", "fifty", "fight", "fighter", "fighting", "figure", "file", "fill", "film", "final", "finally", "finance", "financial", "find", "finding", "fine", "finger", "finish", "fire", "firm", "first", "fish", "fishing", "fit", "fitness", "five", "fix", "flag", "flame", "flat", "flavor", "flee", "flesh", "flight", "float", "floor", "flow", "flower", "fly", "focus", "folk", "follow", "following", "food", "foot", "football", "for", "force", "foreign", "forest", "forever", "forget", "form", "formal", "formation", "former", "formula", "forth", "fortune", "forward", "found", "foundation", "founder", "four", "fourth", "frame", "framework", "free", "freedom", "freeze", "French", "frequency", "frequent", "frequently", "fresh", "friend", "friendly", "friendship", "from", "front", "fruit", "frustration", "fuel", "full", "fully", "fun", "function", "fund", "fundamental", "funding", "funeral", "funny", "furniture", "furthermore", "future", "gain", "galaxy", "gallery", "game", "gang", "gap", "garage", "garden", "garlic", "gas", "gate", "gather", "gay", "gaze", "gear", "gender", "gene", "general", "generally", "generate", "generation", "genetic", "gentleman", "gently", "German", "gesture", "get", "ghost", "giant", "gift", "gifted", "girl", "girlfriend", "give", "given", "glad", "glance", "glass", "global", "glove", "go", "goal", "God", "gold", "golden", "golf", "good", "government", "governor", "grab", "grade", "gradually", "graduate", "grain", "grand", "grandfather", "grandmother", "grant", "grass", "grave", "gray", "great", "greatest", "green", "grocery", "ground", "group", "grow", "growing", "growth", "guarantee", "guard", "guess", "guest", "guide", "guideline", "guilty", "gun", "guy", "habit", "habitat", "hair", "half", "hall", "hand", "handful", "handle", "hang", "happen", "happy", "hard", "hardly", "hat", "hate", "have", "he", "head", "headline", "headquarters", "health", "healthy", "hear", "hearing", "heart", "heat", "heaven", "heavily", "heavy", "heel", "height", "helicopter", "hell", "hello", "help", "helpful", "her", "here", "heritage", "hero", "herself", "hey", "hi", "hide", "high", "highlight", "highly", "highway", "hill", "him", "himself", "hip", "hire", "his", "historian", "historic", "historical", "history", "hit", "hold", "hole", "holiday", "holy", "home", "homeless", "honest", "honey", "honor", "hope", "horizon", "horror", "horse", "hospital", "host", "hot", "hotel", "hour", "house", "household", "housing", "how", "however", "huge", "human", "humor", "hundred", "hungry", "hunter", "hunting", "hurt", "husband", "hypothesis", "I", "ice", "idea", "ideal", "identification", "identify", "identity", "ie", "if", "ignore", "ill", "illegal", "illness", "illustrate", "image", "imagination", "imagine", "immediate", "immediately", "immigrant", "immigration", "impact", "implement", "implication", "imply", "importance", "important", "impose", "impossible", "impress", "impression", "impressive", "improve", "improvement", "in", "incentive", "incident", "include", "including", "income", "incorporate", "increase", "increased", "increasing", "increasingly", "incredible", "indeed", "independence", "independent", "index", "Indian", "indicate", "indication", "individual", "industrial", "industry", "infant", "infection", "inflation", "influence", "inform", "information", "ingredient", "initial", "initially", "initiative", "injury", "inner", "innocent", "inquiry", "inside", "insight", "insist", "inspire", "install", "instance", "instead", "institution", "institutional", "instruction", "instructor", "instrument", "insurance", "intellectual", "intelligence", "intend", "intense", "intensity", "intention", "interaction", "interest", "interested", "interesting", "internal", "international", "Internet", "interpret", "interpretation", "intervention", "interview", "into", "introduce", "introduction", "invasion", "invest", "investigate", "investigation", "investigator", "investment", "investor", "invite", "involve", "involved", "involvement", "Iraqi", "Irish", "iron", "Islamic", "island", "Israeli", "issue", "it", "Italian", "item", "its", "itself", "jacket", "jail", "Japanese", "jet", "Jew", "Jewish", "job", "join", "joint", "joke", "journal", "journalist", "journey", "joy", "judge", "judgment", "juice", "jump", "junior", "jury", "just", "justice", "justify", "keep", "key", "kick", "kid", "kill", "killer", "killing", "kind", "king", "kiss", "kitchen", "knee", "knife", "knock", "know", "knowledge", "lab", "label", "labor", "laboratory", "lack", "lady", "lake", "land", "landscape", "language", "lap", "large", "largely", "last", "late", "later", "Latin", "latter", "laugh", "launch", "law", "lawn", "lawsuit", "lawyer", "lay", "layer", "lead", "leader", "leadership", "leading", "leaf", "league", "lean", "learn", "learning", "least", "leather", "leave", "left", "leg", "legacy", "legal", "legend", "legislation", "legitimate", "lemon", "length", "less", "lesson", "let", "letter", "level", "liberal", "library", "license", "lie", "life", "lifestyle", "lifetime", "lift", "light", "like", "likely", "limit", "limitation", "limited", "line", "link", "lip", "list", "listen", "literally", "literary", "literature", "little", "live", "living", "load", "loan", "local", "locate", "location", "lock", "long", "long-term", "look", "loose", "lose", "loss", "lost", "lot", "lots", "loud", "love", "lovely", "lover", "low", "lower", "luck", "lucky", "lunch", "lung", "machine", "mad", "magazine", "mail", "main", "mainly", "maintain", "maintenance", "major", "majority", "make", "maker", "makeup", "male", "mall", "man", "manage", "management", "manager", "manner", "manufacturer", "manufacturing", "many", "map", "margin", "mark", "market", "marketing", "marriage", "married", "marry", "mask", "mass", "massive", "master", "match", "material", "math", "matter", "may", "maybe", "mayor", "me", "meal", "mean", "meaning", "meanwhile", "measure", "measurement", "meat", "mechanism", "media", "medical", "medication", "medicine", "medium", "meet", "meeting", "member", "membership", "memory", "mental", "mention", "menu", "mere", "merely", "mess", "message", "metal", "meter", "method", "Mexican", "middle", "might", "military", "milk", "million", "mind", "mine", "minister", "minor", "minority", "minute", "miracle", "mirror", "miss", "missile", "mission", "mistake", "mix", "mixture", "mm-hmm", "mode", "model", "moderate", "modern", "modest", "mom", "moment", "money", "monitor", "month", "mood", "moon", "moral", "more", "moreover", "morning", "mortgage", "most", "mostly", "mother", "motion", "motivation", "motor", "mount", "mountain", "mouse", "mouth", "move", "movement", "movie", "Mr", "Mrs", "Ms", "much", "multiple", "murder", "muscle", "museum", "music", "musical", "musician", "Muslim", "must", "mutual", "my", "myself", "mystery", "myth", "naked", "name", "narrative", "narrow", "nation", "national", "native", "natural", "naturally", "nature", "near", "nearby", "nearly", "necessarily", "necessary", "neck", "need", "negative", "negotiate", "negotiation", "neighbor", "neighborhood", "neither", "nerve", "nervous", "net", "network", "never", "nevertheless", "new", "newly", "news", "newspaper", "next", "nice", "night", "nine", "no", "nobody", "nod", "noise", "nomination", "none", "nonetheless", "nor", "normal", "normally", "north", "northern", "nose", "not", "note", "nothing", "notice", "notion", "novel", "now", "nowhere", "n't", "nuclear", "number", "numerous", "nurse", "nut", "object", "objective", "obligation", "observation", "observe", "observer", "obtain", "obvious", "obviously", "occasion", "occasionally", "occupation", "occupy", "occur", "ocean", "odd", "odds", "of", "off", "offense", "offensive", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "okay", "old", "Olympic", "on", "once", "one", "ongoing", "onion", "online", "only", "onto", "open", "opening", "operate", "operating", "operation", "operator", "opinion", "opponent", "opportunity", "oppose", "opposite", "opposition", "option", "or", "orange", "order", "ordinary", "organic", "organization", "organize", "orientation", "origin", "original", "originally", "other", "others", "otherwise", "ought", "our", "ourselves", "out", "outcome", "outside", "oven", "over", "overall", "overcome", "overlook", "owe", "own", "owner", "pace", "pack", "package", "page", "pain", "painful", "paint", "painter", "painting", "pair", "pale", "Palestinian", "palm", "pan", "panel", "pant", "paper", "parent", "park", "parking", "part", "participant", "participate", "participation", "particular", "particularly", "partly", "partner", "partnership", "party", "pass", "passage", "passenger", "passion", "past", "patch", "path", "patient", "pattern", "pause", "pay", "payment", "PC", "peace", "peak", "peer", "penalty", "people", "pepper", "per", "perceive", "percentage", "perception", "perfect", "perfectly", "perform", "performance", "perhaps", "period", "permanent", "permission", "permit", "person", "personal", "personality", "personally", "personnel", "perspective", "persuade", "pet", "phase", "phenomenon", "philosophy", "phone", "photo", "photograph", "photographer", "phrase", "physical", "physically", "physician", "piano", "pick", "picture", "pie", "piece", "pile", "pilot", "pine", "pink", "pipe", "pitch", "place", "plan", "plane", "planet", "planning", "plant", "plastic", "plate", "platform", "play", "player", "please", "pleasure", "plenty", "plot", "plus", "PM", "pocket", "poem", "poet", "poetry", "point", "pole", "police", "policy", "political", "politically", "politician", "politics", "poll", "pollution", "pool", "poor", "pop", "popular", "population", "porch", "port", "portion", "portrait", "portray", "pose", "position", "positive", "possess", "possibility", "possible", "possibly", "post", "pot", "potato", "potential", "potentially", "pound", "pour", "poverty", "powder", "power", "powerful", "practical", "practice", "pray", "prayer", "precisely", "predict", "prefer", "preference", "pregnancy", "pregnant", "preparation", "prepare", "prescription", "presence", "present", "presentation", "preserve", "president", "presidential", "press", "pressure", "pretend", "pretty", "prevent", "previous", "previously", "price", "pride", "priest", "primarily", "primary", "prime", "principal", "principle", "print", "prior", "priority", "prison", "prisoner", "privacy", "private", "probably", "problem", "procedure", "proceed", "process", "produce", "producer", "product", "production", "profession", "professional", "professor", "profile", "profit", "program", "progress", "project", "prominent", "promise", "promote", "prompt", "proof", "proper", "properly", "property", "proportion", "proposal", "propose", "proposed", "prosecutor", "prospect", "protect", "protection", "protein", "protest", "proud", "prove", "provide", "provider", "province", "provision", "psychological", "psychologist", "psychology", "public", "publication", "publicly", "publish", "publisher", "pull", "punishment", "purchase", "pure", "purpose", "pursue", "push", "put", "qualify", "quality", "quarter", "quarterback", "question", "quick", "quickly", "quiet", "quietly", "quit", "quite", "quote", "race", "racial", "radical", "radio", "rail", "rain", "raise", "range", "rank", "rapid", "rapidly", "rare", "rarely", "rate", "rather", "rating", "ratio", "raw", "reach", "react", "reaction", "read", "reader", "reading", "ready", "real", "reality", "realize", "really", "reason", "reasonable", "recall", "receive", "recent", "recently", "recipe", "recognition", "recognize", "recommend", "recommendation", "record", "recording", "recover", "recovery", "recruit", "red", "reduce", "reduction", "refer", "reference", "reflect", "reflection", "reform", "refugee", "refuse", "regard", "regarding", "regardless", "regime", "region", "regional", "register", "regular", "regularly", "regulate", "regulation", "reinforce", "reject", "relate", "relation", "relationship", "relative", "relatively", "relax", "release", "relevant", "relief", "religion", "religious", "rely", "remain", "remaining", "remarkable", "remember", "remind", "remote", "remove", "repeat", "repeatedly", "replace", "reply", "report", "reporter", "represent", "representation", "representative", "Republican", "reputation", "request", "require", "requirement", "research", "researcher", "resemble", "reservation", "resident", "resist", "resistance", "resolution", "resolve", "resort", "resource", "respect", "respond", "respondent", "response", "responsibility", "responsible", "rest", "restaurant", "restore", "restriction", "result", "retain", "retire", "retirement", "return", "reveal", "revenue", "review", "revolution", "rhythm", "rice", "rich", "rid", "ride", "rifle", "right", "ring", "rise", "risk", "river", "road", "rock", "role", "roll", "romantic", "roof", "room", "root", "rope", "rose", "rough", "roughly", "round", "route", "routine", "row", "rub", "rule", "run", "running", "rural", "rush", "Russian", "sacred", "sad", "safe", "safety", "sake", "salad", "salary", "sale", "sales", "salt", "same", "sample", "sanction", "sand", "satellite", "satisfaction", "satisfy", "sauce", "save", "saving", "say", "scale", "scandal", "scared", "scenario", "scene", "schedule", "scheme", "scholar", "scholarship", "school", "science", "scientific", "scientist", "scope", "score", "scream", "screen", "script", "sea", "search", "season", "seat", "second", "secret", "secretary", "section", "sector", "secure", "security", "see", "seed", "seek", "seem", "segment", "seize", "select", "selection", "self", "sell", "Senate", "senator", "send", "senior", "sense", "sensitive", "sentence", "separate", "sequence", "series", "serious", "seriously", "serve", "service", "session", "set", "setting", "settle", "settlement", "seven", "several", "severe", "sex", "sexual", "shade", "shadow", "shake", "shall", "shape", "share", "sharp", "she", "sheet", "shelf", "shell", "shelter", "shift", "shine", "ship", "shirt", "shit", "shock", "shoe", "shoot", "shooting", "shop", "shopping", "shore", "short", "shortly", "shot", "should", "shoulder", "shout", "show", "shower", "shrug", "shut", "sick", "side", "sigh", "sight", "sign", "signal", "significance", "significant", "significantly", "silence", "silent", "silver", "similar", "similarly", "simple", "simply", "sin", "since", "sing", "singer", "single", "sink", "sir", "sister", "sit", "site", "situation", "six", "size", "ski", "skill", "skin", "sky", "slave", "sleep", "slice", "slide", "slight", "slightly", "slip", "slow", "slowly", "small", "smart", "smell", "smile", "smoke", "smooth", "snap", "snow", "so", "so-called", "soccer", "social", "society", "soft", "software", "soil", "solar", "soldier", "solid", "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometimes", "somewhat", "somewhere", "son", "song", "soon", "sophisticated", "sorry", "sort", "soul", "sound", "soup", "source", "south", "southern", "Soviet", "space", "Spanish", "speak", "speaker", "special", "specialist", "species", "specific", "specifically", "speech", "speed", "spend", "spending", "spin", "spirit", "spiritual", "split", "spokesman", "sport", "spot", "spread", "spring", "square", "squeeze", "stability", "stable", "staff", "stage", "stair", "stake", "stand", "standard", "standing", "star", "stare", "start", "state", "statement", "station", "statistics", "status", "stay", "steady", "steal", "steel", "step", "stick", "still", "stir", "stock", "stomach", "stone", "stop", "storage", "store", "storm", "story", "straight", "strange", "stranger", "strategic", "strategy", "stream", "street", "strength", "strengthen", "stress", "stretch", "strike", "string", "strip", "stroke", "strong", "strongly", "structure", "struggle", "student", "studio", "study", "stuff", "stupid", "style", "subject", "submit", "subsequent", "substance", "substantial", "succeed", "success", "successful", "successfully", "such", "sudden", "suddenly", "sue", "suffer", "sufficient", "sugar", "suggest", "suggestion", "suicide", "suit", "summer", "summit", "sun", "super", "supply", "support", "supporter", "suppose", "supposed", "Supreme", "sure", "surely", "surface", "surgery", "surprise", "surprised", "surprising", "surprisingly", "surround", "survey", "survival", "survive", "survivor", "suspect", "sustain", "swear", "sweep", "sweet", "swim", "swing", "switch", "symbol", "symptom", "system", "table", "tablespoon", "tactic", "tail", "take", "tale", "talent", "talk", "tall", "tank", "tap", "tape", "target", "task", "taste", "tax", "taxpayer", "tea", "teach", "teacher", "teaching", "team", "tear", "teaspoon", "technical", "technique", "technology", "teen", "teenager", "telephone", "telescope", "television", "tell", "temperature", "temporary", "ten", "tend", "tendency", "tennis", "tension", "tent", "term", "terms", "terrible", "territory", "terror", "terrorism", "terrorist", "test", "testify", "testimony", "testing", "text", "than", "thank", "thanks", "that", "the", "theater", "their", "them", "theme", "themselves", "then", "theory", "therapy", "there", "therefore", "these", "they", "thick", "thin", "thing", "think", "thinking", "third", "thirty", "this", "those", "though", "thought", "thousand", "threat", "threaten", "three", "throat", "through", "throughout", "throw", "thus", "ticket", "tie", "tight", "time", "tiny", "tip", "tire", "tired", "tissue", "title", "to", "tobacco", "today", "toe", "together", "tomato", "tomorrow", "tone", "tongue", "tonight", "too", "tool", "tooth", "top", "topic", "toss", "total", "totally", "touch", "tough", "tour", "tourist", "tournament", "toward", "towards", "tower", "town", "toy", "trace", "track", "trade", "tradition", "traditional", "traffic", "tragedy", "trail", "train", "training", "transfer", "transform", "transformation", "transition", "translate", "transportation", "travel", "treat", "treatment", "treaty", "tree", "tremendous", "trend", "trial", "tribe", "trick", "trip", "troop", "trouble", "truck", "true", "truly", "trust", "truth", "try", "tube", "tunnel", "turn", "TV", "twelve", "twenty", "twice", "twin", "two", "type", "typical", "typically", "ugly", "ultimate", "ultimately", "unable", "uncle", "under", "undergo", "understand", "understanding", "unfortunately", "uniform", "union", "unique", "unit", "United", "universal", "universe", "university", "unknown", "unless", "unlike", "unlikely", "until", "unusual", "up", "upon", "upper", "urban", "urge", "us", "use", "used", "useful", "user", "usual", "usually", "utility", "vacation", "valley", "valuable", "value", "variable", "variation", "variety", "various", "vary", "vast", "vegetable", "vehicle", "venture", "version", "versus", "very", "vessel", "veteran", "via", "victim", "victory", "video", "view", "viewer", "village", "violate", "violation", "violence", "violent", "virtually", "virtue", "virus", "visible", "vision", "visit", "visitor", "visual", "vital", "voice", "volume", "volunteer", "vote", "voter", "vs", "vulnerable", "wage", "wait", "wake", "walk", "wall", "wander", "want", "war", "warm", "warn", "warning", "wash", "waste", "watch", "water", "wave", "way", "we", "weak", "wealth", "wealthy", "weapon", "wear", "weather", "wedding", "week", "weekend", "weekly", "weigh", "weight", "welcome", "welfare", "well", "west", "western", "wet", "what", "whatever", "wheel", "when", "whenever", "where", "whereas", "whether", "which", "while", "whisper", "white", "who", "whole", "whom", "whose", "why", "wide", "widely", "widespread", "wife", "wild", "will", "willing", "win", "wind", "window", "wine", "wing", "winner", "winter", "wipe", "wire", "wisdom", "wise", "wish", "with", "withdraw", "within", "without", "witness", "woman", "wonder", "wonderful", "wood", "wooden", "word", "work", "worker", "working", "works", "workshop", "world", "worried", "worry", "worth", "would", "wound", "wrap", "write", "writer", "writing", "wrong", "yard", "yeah", "year", "yell", "yellow", "yes", "yesterday", "yet", "yield", "you", "young", "your", "yours", "yourself", "youth", "zone"]
const KEYSTROKE_ENTROPY = []

/* core functions */

const get_random_integer = (min=1, max=10) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const get_pseudorandom_element_of = (array) => {
    random = Math.random()
    element =  array[Math.floor(random * array.length)]
    return element
}

const get_random_element_of = (array) => {
    random = Math.random()
    element =  array[Math.floor(random * array.length)]
    return element
}

const random_rgb = () => {
    r = get_random_integer(0,255)
    g = get_random_integer(0,255)
    b = get_random_integer(0,255)
    return `rgb(${r}, ${g}, ${b})`
}

class DropOfEntropy {
    /* an object that consists of a number and two colors */
    constructor(integer=get_random_integer(0,100), color=random_rgb(), backgroundColor=random_rgb()) {
        this.value = integer;
        this.color = color;
        this.backgroundColor = backgroundColor
    }
}

/* create arrays and add them to ENTROPY_POOLS */
const create_pools = () => {
    for (let i = 0; i < POOL_COUNT; i++) {
        ENTROPY_POOLS[i] = []
    }
}

/* function that fills an array with DropOfEntropy objects */
const populate_with_drops = (array, quantity=10) => {
    for (let i = 0; i < quantity; i++) {
        var number = get_random_integer(0,100)
        var color = random_rgb()
        var backgroundColor = random_rgb()
        drop = new DropOfEntropy(number, color, backgroundColor)
        array.push(drop)
    }
}

const populate_arrays = () => {
    ENTROPY_POOLS.forEach(array => {
        populate_with_drops(array,10)
    })
}

/*  from the entropy contained in ENTROPY_POOLS,
    generate a number between 0 and 1               */
const get_random = () => {
    
    array = get_pseudorandom_element_of(ENTROPY_POOLS)
    droplet = get_pseudorandom_element_of(array)
    number = droplet.value

    // divide it by 100 so it's between 0.00 and 1.00
    number = number / 100
    return number
}

/* OUTPUT AND VISUALS */

const update_wall_of_entropy = () => {

    wallElement.innerHTML = ''

    ENTROPY_POOLS.forEach(array => {
        
        var p = document.createElement('p')

        for (let i = 0; i < array.length; i++) {
            
            var span = document.createElement('span');
            drop = array[i]

            /* retrive the integer */
            number = drop.value
            if (number < 10) {
                span.innerHTML = `0${number}`
            }
            else if (number >= 10) {
                span.innerHTML = `${number}`
            }

            /* set the css values */
            span.style.color = drop.color
            span.style.backgroundColor = drop.backgroundColor

            /* append the <span> to the <p> */
            p.appendChild(span)
        }
        
        /* append the <p> to the <div> */
        wallElement.appendChild(p)
});}

const generate_password = () => {
    
    var list = ''
    const lowercase_list = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers_list = '1234567890'
    const symbols_list = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

    var length = document.getElementById("length").value

    /* if more than max, set to max */
    if (length > MAX_PASSWORD_LENGTH ) {
        document.getElementById("length").value = MAX_PASSWORD_LENGTH
        length = MAX_PASSWORD_LENGTH
    }

    /* if less than 11, set to 1*/
    else if (length < 1 ) {
        document.getElementById("length").value = 1
        length = 1
    }

    var lowercase = document.getElementById("lowercase").checked
    var uppercase = document.getElementById("uppercase").checked
    var numbers = document.getElementById("numbers").checked
    var symbols = document.getElementById("symbols").checked

    if (lowercase) {list += lowercase_list}
    if (uppercase) {list += uppercase_list}
    if (numbers) {list += numbers_list}    
    if (symbols) {list += symbols_list}

    if (list == '') {
        password = "can't make an omelette without eggs!"
        return password
    }
    
    var password = ''

    for (let i = 0; i < length; i++) {
        var random_char = get_random_element_of(list)
        password = password += random_char
    }

    return password
}

const generate_passphrase = (length=4, word_list=WORDLIST_3K) => {
    
    var length = document.getElementById("phrase-length").value

    /* if more than 10, set to 10*/
    if (length > MAX_PASSPHRASE_LENGTH ) {
        document.getElementById("phrase-length").value = MAX_PASSPHRASE_LENGTH
        length = MAX_PASSPHRASE_LENGTH
    }

    /* if less than 11, set to 1*/
    else if (length < 1 ) {
        document.getElementById("phrase-length").value = 1
        length = 1
    }

    var passphrase = ""
    words = []

    /* get words */    
    for (let i = 0; i < length; i++) {
        var word = get_random_element_of(word_list)
        words.push(word)
    }

    /* combine words into passphrase */
    words.forEach(word => {
        passphrase = passphrase += word + ' '
    })
    passphrase = passphrase.trim()

    return passphrase
}

/* INPUT */

/* buttons */

const populate_password = () => {
    var password = generate_password()
    const passwordElement = document.getElementById("password")
    passwordElement.value = password    
}

const populate_passphrase = () => {
    var passphrase = generate_passphrase()
    const passphraseElement = document.getElementById("passphrase")
    passphraseElement.value = passphrase
}

const PasswordButton = document.getElementById("generate-password")
const PassphraseButton = document.getElementById("generate-passphrase")

PasswordButton.onclick = populate_password
PassphraseButton.onclick = populate_passphrase

/* keystrokes */

document.addEventListener("keydown", function(event) {

    /* if user presses any key */ 
    /* add the keycode to the entropy pool */
    KEYSTROKE_ENTROPY.push(event.keyCode)

    if (KEYSTROKE_ENTROPY.length > 100) {
        KEYSTROKE_ENTROPY.shift()
    }

    debug_log(`You pressed key code ${event.keyCode}`)
    debug_log(KEYSTROKE_ENTROPY)

    anykey_updates()
    
    /* if the key pressed was spacebar */
    if (event.keyCode == 32) {

        spacebar_updates()
    }

});

/* change the color of the "faceroll your keyboard" phrase */
const faceroll_feedback = () => {

    document.getElementById('faceroll-0').style.color = random_rgb()
    document.getElementById('faceroll-1').style.color = random_rgb()
    document.getElementById('faceroll-2').style.color = random_rgb()
    document.getElementById('faceroll-3').style.color = random_rgb()
    document.getElementById('faceroll-4').style.color = random_rgb()
}

/* START POOL MORPH FUNCTIONS */

const new_from_left = (array) => {
    old = array.pop() // remove the last element
    drop = new DropOfEntropy
    array.unshift(drop) // add it to the start of the array
    debug_log(`${old.value} removed, ${drop.value} added.`)
}

const new_from_right = (array) => {
    old = array.shift() // remove the first element
    drop = new DropOfEntropy
    array.push(drop) // add it to the end of the array
    debug_log(`${old.value} removed, ${drop.value} added.`)
}

/* takes the leftmost element and replaces it at the right */
const roll_left = (array) => {
    element = array.shift()
    array.push(element)
    update_wall_of_entropy()
}

/* takes the rightmost element and replaces it at the left */
const roll_right = (array) => {
    element = array.pop()
    array.unshift(element)
    update_wall_of_entropy()
}

const incorporate_keystroke_entropy = () => {

    /* get */
    var integer

    if ( KEYSTROKE_ENTROPY.length > 0 ) { integer = get_random_element_of(KEYSTROKE_ENTROPY) }
    else { integer = get_random_integer() }

    integer = integer + get_random_integer(-10,10)
    if (integer > 99 ) { integer = parseInt(integer / 2) }
    else if (integer < 0) { integer = -integer };

    pool = get_random_element_of(ENTROPY_POOLS)
    droplet = get_random_element_of(pool)
    droplet.value = integer
    droplet.color = `rgb(255, 255, 255)`
    droplet.backgroundColor = `rgb(000, 000, 000)`

}

/* take a number from KEYSTROKE_ENTROPY and replace a random number with it */


const morph_pools = () => {
 
    for (let i = 0; i < POOL_COUNT; i++) {
        var direction = get_random_element_of(['left', 'right'])
        if (i % 2 == 0) {new_from_left(ENTROPY_POOLS[i])}
        else {new_from_right(ENTROPY_POOLS[i])}
    }
}

/* END POOL MORPH FUNCTIONS */


const spacebar_updates = () => {

    populate_password();
    populate_passphrase();

}

const anykey_updates = () => {

    /* entropy */    
    incorporate_keystroke_entropy()
    morph_pools()

    /* add to counter */
    KEYSTROKE_COUNT = KEYSTROKE_COUNT + 1 
    document.getElementById("keystrokes").innerHTML = KEYSTROKE_COUNT

    /* output */
    update_wall_of_entropy()
    faceroll_feedback()

}

window.onload = () => {

    /* initialize */
    create_pools();
    populate_arrays();

    /* update */
    update_wall_of_entropy()
    spacebar_updates()
}

wallElement.onclick = anykey_updates

const debug_log = (text) => {if (DEBUG_MODE) {console.log(text)} }

/* todo */
