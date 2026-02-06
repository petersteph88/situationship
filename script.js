// script.js

function app() {
    return {
        state: 'landing', // landing, quiz, loading, result
        questions: [],
        current: 0,
        answers: [],
        score: 0,
        title: '',
        roast: '',
        badgeEmoji: '❤️',
        shared: false,
        email: '',
        loadingMessage: '',
        answerOptions: [
    { label: "Never! 😏", score: 10 },
    { label: "Rarely", score: 7 },
    { label: "Sometimes 😬", score: 4 },
    { label: "Often 🚩", score: 1 },
    { label: "Always 🏃‍♀️", score: 0 }
],
        loadingMessages: [
            'Counting red flags...',
            'Measuring delulu levels...',
            'Checking if you\'re cooked...',
            'Analyzing mixed signals...',
            'Roasting your situationship...'
        ],
        buckets: [
            // 0-25
            {
                min: 0, max: 25,
                titles: ['Delulu Master', 'Situationship Victim', 'Red Flag Collector', 'Ghosted Pro'],
                summaryPhrases: ['You\'re deep in the trenches of a one-sided mess 😩', 'This is giving hostage situation vibes 🚩', 'Your heart\'s on life support 💔'],
                roastPhrases: ['They treat you like a free trial – always canceling.', 'Your texts get more reads than a bestseller, but no replies.', 'Breadcrumbing level: expert chef.'],
                punchPhrases: ['Wake up and smell the ghosting!', 'You\'re not dating, you\'re in a solo RPG.', 'This ain\'t a situationship, it\'s a simulation.'],
                advicePhrases: ['Set boundaries and see if they step up or ghost.', 'You deserve clarity – don\'t settle for crumbs.', 'Reflect on what you truly want in a partner.'],
                emojis: ['🤡', '🚩', '💔', '👻']
            },
            // 26-45
            {
                min: 26, max: 45,
                titles: ['Classic Situationship', 'Mixed Signals Champ', 'Breadcrumb Boss', 'Delulu Lite'],
                summaryPhrases: ['Classic situationship energy – all vibes, no clarity 😵‍💫', 'You\'re in the grey zone, dodging red flags like a pro 🏃', 'This is textbook talking stage purgatory 📖'],
                roastPhrases: ['They like your stories more than they like texting back.', 'Hot and cold like a broken microwave.', 'Exclusively non-exclusive.'],
                punchPhrases: ['Time to demand labels or dip!', 'You\'re basically their emotional support animal.', 'Plot twist: you\'re the side quest.'],
                advicePhrases: ['Communicate your needs openly.', 'Don\'t ignore the inconsistencies.', 'Value your time and energy.'],
                emojis: ['😵‍💫', '🤷', '📱', '🍞']
            },
            // 46-65
            {
                min: 46, max: 65,
                titles: ['Situationship with Hope', 'Almost Dating', 'Grey Area Grad', 'Vibe Checker'],
                summaryPhrases: ['There\'s hope, but it\'s still situationship adjacent 🤞', 'Almost dating, but labels are allergic 😷', 'Mixed signals with a side of potential ✨'],
                roastPhrases: ['They act committed until you ask "what are we?".', 'Playlists shared, but not the future.', 'Jealous but won\'t claim you.'],
                punchPhrases: ['Close, but no ring emoji yet.', 'You\'re in the friendzone upgrade queue.', 'Delulu with a plan.'],
                advicePhrases: ['Have the define-the-relationship talk.', 'Look for consistent actions over words.', 'Build on the positive signs.'],
                emojis: ['🤞', '🔥', '❓', '📈']
            },
            // 66-85
            {
                min: 66, max: 85,
                titles: ['Basically Dating', 'Label-Shy Lovers', 'Unofficial Official', 'Couple in Denial'],
                summaryPhrases: ['You\'re basically dating but scared to admit it 😏', 'Committed energy without the title 💑', 'Relationship vibes on stealth mode 🕵️'],
                roastPhrases: ['You met the fam but still "just vibing".', 'Exclusive but won\'t delete the apps.', 'Holding hands but no bio update.'],
                punchPhrases: ['Just slap the label on already!', 'You\'re married in spirit.', 'Denial ain\'t just a river.'],
                advicePhrases: ['Embrace the commitment you already have.', 'Discuss next steps comfortably.', 'Celebrate the good vibes.'],
                emojis: ['😏', '💑', '🔒', '🤫']
            },
            // 86-100
            {
                min: 86, max: 100,
                titles: ['Committed Energy', 'Wifed Up', 'Relationship Goals', 'Locked In'],
                summaryPhrases: ['This is committed energy – lock it down 💍', 'You\'re basically married, update the bio 😭', 'Green flags everywhere 🟢'],
                roastPhrases: ['They reply faster than you can type.', 'Posted you with no crop – rare W.', 'Labels? You invented them.'],
                punchPhrases: ['Just get the ring already!', 'You won the dating lottery.', 'Situationship? What\'s that?'],
                advicePhrases: ['Keep nurturing the mutual effort.', 'Appreciate the consistency.', 'Continue communicating openly.'],
                emojis: ['💍', '❤️', '🟢', '🏆']
            }
        ],
        questionsPool: [
            "How many hours after you text do they usually reply… if they even bother?",
            "Have they ever left you on delivered for over 48 hours then acted like nothing happened?",
            "Do you know their zodiac sign but not their real last name?",
            "How many times have they said 'I'm not looking for anything serious'?",
            "Are you on Find My Friends or are you still playing trust roulette?",
            "Have they ever called you 'bestie' right after hooking up?",
            "Do you have matching playlists but no actual relationship title?",
            "Have they posted a thirst trap right after ghosting you for three days?",
            "Do they say 'ily' but never 'I love you' out loud?",
            "How often do they cancel plans last minute with a weak excuse?",
            "Have you met their friends or are you still in the secret menu phase?",
            "Do they like all your stories but never reply to your texts?",
            "Have they ever said 'you're too good for me' as a get-out-of-jail-free card?",
            "Is their ex still in their close friends list?",
            "Do they get mad when you post without them but never post you?",
            "Have they ever breadcrumbed you for weeks then disappeared?",
            "Do you split the bill 50/50 or is it always 'I'll get next time'?",
            "Have they ever said 'we're just vibing' while holding your hand?",
            "Do they watch your location but never tell you where they are?",
            "Have they ever called you clingy for wanting basic communication?",
            "Is their phone always face down when you're together?",
            "Have they ever said 'I don't do labels' after six months?",
            "Do they only text you after 10 p.m.?",
            "Have they ever compared you to their ex (even as a 'compliment')?",
            "Do you know where they live but they've never invited you over?",
            "Have they ever said 'you're my person' but still on dating apps?",
            "Do they get defensive when you ask what you're doing this weekend?",
            "Have they ever left you on read then posted a story partying?",
            "Do they only compliment you when they want something?",
            "Have they ever said 'let's just see where it goes' for 8+ months?",
            "Is their 'talking stage' playlist longer than your entire situationship?",
            "Have they ever ghosted you then liked your selfie three weeks later?",
            "Do they call you 'babe' but never introduce you as anything?",
            "Have they ever said 'you're overthinking it' when you ask for clarity?",
            "Do they disappear every time you bring up feelings?",
            "Have they ever used 'I'm busy' as their default excuse?",
            "Do they only hit you up when they're bored or drunk?",
            "Have they ever said 'I like you a lot' but won't delete Tinder?",
            "Is their best friend still referring to you as 'that person they're talking to'?",
            "Have they ever posted a meme about being single right after you hung out?",
            "Do they get mad if you take too long to reply but take days themselves?",
            "Have they ever said 'we're exclusive' but still follow 500 models?",
            "Do they only want to hang out at your place, never theirs?",
            "Have they ever said 'you're too much' when you express needs?",
            "Do they call it 'hanging out' even when you're literally in bed together?",
            "Have they ever left you on opened during a whole conversation?",
            "Do they only text paragraphs when they're trying to get you back?",
            "Have they ever said 'I don't want to lose you' but won't commit?",
            "Is their 'talking to' phase now measured in years?",
            "Have they ever referred to you as 'a friend' in front of people?",
            "Do they get jealous when you talk to others but won't define anything?",
            "Have they ever said 'you're special' while keeping options open?",
            "Do they only show affection when no one else is watching?",
            "Have they ever breadcrumbed you with memes but never real conversation?",
            "Do they say 'I miss you' but never make plans?",
            "Have they ever gaslit you into thinking you're the problem for wanting clarity?",
            "Do they only call you cute when they're trying to get laid?",
            "Have they ever said 'we're basically together' but won't post you?",
            "Is their reply speed directly correlated with how horny they are?",
            "Have they ever left you hanging mid-argument then posted gym selfies?",
            "Do they only reach out after you start pulling away?",
            "Have they ever said 'you're my favorite person' but still swipe right?",
            "Do they get mad if you don't double-text but never start the convo?",
            "Have they ever called you dramatic for asking where this is going?",
            "Do they only want emotional support but never give it back?",
            "Have they ever said 'let's keep it casual' after meeting your mom?",
            "Is their communication style 90% memes and 10% actual words?",
            "Have they ever ghosted you then said 'I was just busy'?",
            "Do they only compliment your looks, never your personality?",
            "Have they ever said 'I care about you' but disappear for weeks?",
            "Do they get upset when you set boundaries but won't respect them?",
            "Have they ever called you 'crazy' for wanting consistency?",
            "Do they only text you when their other options flake?",
            "Have they ever said 'you're different' as a way to keep you around?",
            "Is their favorite reply 'haha' or 'bet'?",
            "Have they ever left you on read then watched your story?",
            "Do they only want you when it's convenient for them?",
            "Have they ever said 'I don't know what I want' after months?",
            "Do they call you 'love' but won't define the relationship?",
            "Have they ever breadcrumbed you with good morning texts then ghosted?",
            "Do they get mad if you flirt with others but won't claim you?",
            "Have they ever said 'you're too available' as an insult?",
            "Is their love language 'mixed signals'?",
            "Have they ever posted you in stories but cropped your face?",
            "Do they only hit you up when they need an ego boost?",
            "Have they ever said 'we're good' after ignoring you for days?",
            "Do they only want Netflix and chill, never real dates?",
            "Have they ever called you 'too emotional' for having feelings?",
            "Do they disappear every time you mention the future?",
            "Have they ever said 'you're perfect' but won't commit?",
            "Is their texting style hot and cold like a broken thermostat?",
            "Have they ever liked your ex's post to mess with you?",
            "Do they only want you around when they're lonely?",
            "Have they ever said 'I like our vibe' instead of 'I like you'?",
            "Do they get defensive when you ask basic questions?",
            "Have they ever called you 'needy' for wanting reciprocity?",
            "Is their favorite excuse 'life's been crazy'?",
            "Have they ever said 'you're my person' while keeping backups?",
            "Do they only show up when it's beneficial for them?",
            "Have they ever breadcrumbed you with 'thinking of you' texts?",
            "Do they call it 'talking' even after sleeping together for months?",
            "Have they ever said 'I don't want to hurt you' while hurting you?",
            "Is their communication 100% vibes and 0% clarity?",
            "Have they ever posted cryptic stories right after you argued?",
            "Do they only want emotional labor but never give it?",
            "Have they ever said 'you're overreacting' when you call out red flags?",
            "Do they disappear every time feelings get real?",
            "Have they ever called you 'intense' for wanting commitment?",
            "Is their reply game stronger when they're trying to get you back?",
            "Have they ever said 'we're just chilling' after meeting your friends?",
            "Do they only text paragraphs when they messed up?",
            "Have they ever left you on read then posted a gym mirror pic?",
            "Do they get mad if you don't respond fast but take days themselves?",
            "Have they ever said 'you're special to me' but won't delete Hinge?",
            "Is their situationship longer than most people's actual relationships?",
            "Have they ever called you 'crazy' for wanting basic respect?",
            "Do they only want you when their ego needs stroking?",
            "Have they ever breadcrumbed you with Spotify links?",
            "Do they say 'I miss you' but never make time?",
            "Have they ever gaslit you into thinking you're the issue?",
            "Do they only compliment you when they want attention?",
            "Have they ever said 'let's not ruin this' as code for no commitment?",
            "Is their love language 'avoidance'?",
            "Have they ever posted a couple meme but never called you their partner?",
            "Do they only reach out after you stop caring?",
            "Have they ever said 'you're too good for me' while treating you badly?",
            "Do they get jealous but won't define the relationship?",
            "Have they ever called you 'clingy' for texting first?",
            "Is their favorite activity 'leaving on read'?",
            "Have they ever said 'I care' but their actions say otherwise?",
            "Do they only want the benefits without the label?",
            "Have they ever breadcrumbed you with 'goodnight' texts?",
            "Do they disappear every time you ask for more?",
            "Have they ever said 'you're amazing' but won't commit?",
            "Is their texting ratio 80% you, 20% them?",
            "Have they ever liked your story but ignored your message?",
            "Do they only want you around for the ego boost?",
            "Have they ever said 'we're exclusive' but still follow models?",
            "Do they call you 'baby' but never 'girlfriend/boyfriend'?",
            "Have they ever left you hanging mid-convo then posted partying?",
            "Do they only show up when it's convenient?",
            "Have they ever said 'you're my favorite' while keeping options?",
            "Is their communication style 'bare minimum'?",
            "Have they ever called you dramatic for asking questions?",
            "Do they only want physical but never emotional?",
            "Have they ever said 'I like you a lot' but won't delete apps?",
            "Do they get mad if you pull away but won't step up?",
            "Have they ever breadcrumbed you with heart reacts?",
            "Do they only text when drunk or bored?",
            "Have they ever said 'you're different' as a way to string you along?",
            "Is their situationship now in its second season?",
            "Have they ever posted you but tagged someone else?",
            "Do they only want validation, never commitment?",
            "Have they ever called you 'too much' for having standards?",
            "Do they disappear every time you mention exclusivity?",
            "Have they ever said 'I don't do labels' after sleeping over weekly?",
            "Is their reply speed directly tied to their mood?",
            "Have they ever left you on seen then posted a story with friends?",
            "Do they only compliment your body, never your mind?",
            "Have they ever said 'you're my person' but won't make it official?",
            "Do they get defensive when you ask simple questions?",
            "Have they ever called you needy for wanting consistency?",
            "Is their favorite phrase 'let's just see'?",
            "Have they ever breadcrumbed you with good morning memes?",
            "Do they only want you when their other plans fall through?",
            "Have they ever said 'I care about you' but vanish for weeks?",
            "Do they call it 'vibing' even after meeting family?",
            "Have they ever gaslit you about their own red flags?",
            "Do they only reach out when they need something?",
            "Have they ever said 'you're perfect' but treat you average?",
            "Is their love language 'mixed signals and confusion'?"
        ],

        init() {
            // Check for shared params
            const params = new URLSearchParams(window.location.search);
            if (params.has('score')) {
                this.score = parseInt(params.get('score'));
                this.title = decodeURIComponent(params.get('title'));
                this.roast = decodeURIComponent(params.get('roast'));
                this.state = 'result';
                this.shared = true;
                this.setBadge();
                gtag('event', 'result_viewed', { 'shared': true });
                return;
            }

            // Select random questions
            this.selectRandomQuestions();
            gtag('event', 'page_view');
        },

        selectRandomQuestions() {
            let pool = [...this.questionsPool];
            let selected = [];
            for (let i = 0; i < 10; i++) {
                const idx = Math.floor(Math.random() * pool.length);
                selected.push({ text: pool[idx] });
                pool.splice(idx, 1);
            }
            this.questions = selected;
            this.answers = new Array(10);
            this.current = 0;
        },

        startQuiz() {
            this.state = 'quiz';
            gtag('event', 'quiz_started');
        },

        nextQuestion() {
            if (this.current < 9) {
                this.current++;
            } else {
                this.calculateScore();
            }
        },

        calculateScore() {
            this.state = 'loading';
            this.loadingMessage = this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)];
            setTimeout(() => {
                let total = 0;
                this.answers.forEach(score => total += score);
                this.score = total;
                this.generateRoast();
                this.setBadge();
                this.state = 'result';
                gtag('event', 'result_generated', { 'score': this.score });
            }, 1500 + Math.random() * 1000); // 1.5-2.5s delay
        },

        findBucket(score) {
            return this.buckets.find(b => score >= b.min && score <= b.max);
        },

        randomFrom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },

        generateRoast() {
            if (this.score < 15) {
                this.title = 'Situationship Crime Scene';
                this.roast = "This isn't a situationship, this is a situationship crime scene 🚨. They're ghosting so hard, Casper's jealous. Time to delete and block – you deserve better!";
                return;
            }
            if (this.score > 95) {
                this.title = 'Basically Married';
                this.roast = "You two should just get married already… or at least update the Instagram bio 😭💍. Green flags everywhere – keep it up!";
                return;
            }

            const bucket = this.findBucket(this.score);
            this.title = this.randomFrom(bucket.titles);
            const summary = this.randomFrom(bucket.summaryPhrases);
            const roastSent = this.randomFrom(bucket.roastPhrases);
            const punch = Math.random() > 0.5 ? this.randomFrom(bucket.punchPhrases) : '';
            const advice = Math.random() < 0.35 ? this.randomFrom(bucket.advicePhrases) : '';
            this.roast = `${summary}. ${roastSent} ${punch} ${advice}`.trim();
        },

        setBadge() {
            const bucket = this.findBucket(this.score);
            this.badgeEmoji = this.randomFrom(bucket.emojis);
        },

        remix() {
            this.selectRandomQuestions();
            this.state = 'quiz';
            this.shared = false;
            gtag('event', 'remix_clicked');
        },

        sharePng() {
            html2canvas(document.getElementById('result-card')).then(canvas => {
                const link = document.createElement('a');
                link.download = 'situationship-score.png';
                link.href = canvas.toDataURL();
                link.click();
            });
            gtag('event', 'share_png');
        },

        challenge() {
            const base = window.location.origin + window.location.pathname;
            const params = new URLSearchParams({
                score: this.score,
                title: encodeURIComponent(this.title),
                roast: encodeURIComponent(this.roast)
            });
            const shareUrl = `${base}?${params.toString()}`;
            // For simplicity, copy to clipboard
            navigator.clipboard.writeText(shareUrl).then(() => alert('Link copied! Share it with your person.'));
            gtag('event', 'challenge_shared');
        },

        submitEmail() {
            if (this.email) {
                console.log('Email captured:', this.email); // Or localStorage.setItem('email', this.email);
                alert('Thanks! (Stored locally for now)');
                this.email = '';
            }
        }
    };
}