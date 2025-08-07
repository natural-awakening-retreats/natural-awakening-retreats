---
layout: default
---
{% include hero.html %}
{% include about.html %}

{% include facilitators-header.html %}

<section id="facilitators">
  {% include facilitator_right.html
    name="Ana Jones"
    quote="Permission to Wonder"
    quote_type="workshop"
    image="/assets/images/ana-jones.jpg"
    handle="anacjonesg"
    bio="When we move in the world recognizing ONLY the parts of us that have been praised and deemed good, we are leaving behind the other parts that have been labeled as bad or undesirable.

    This means that as we move through life we continue to wear masks and costumes to hide these parts of us.

    The invitation in this workshop would be to recognize these parts of us and then integrate them so we can move forward and claim all of who we are.
    Only then can we be truly free."
  %}

  {% include facilitator_left.html
    name="Anne Gocht"
    quote="Certified Vinyasa & Yin Yoga Teacher"
    quote_type="job"
    image="/assets/images/anne-gocht.jpg"
    handle="annegocht"
    bio="Her journey with Yoga began in 2018, after experiencing a burnout and mental breakdown. Through the healing power of Ayurveda and Yoga, she found her way back to balance. This transformation ignited a lifelong passion: since then, Anne has done 800h of trainings & certifications, from Hatha, Vinyasa-Ashtanga & Yin Yoga, to Sound Healing, Ayurveda nutrition, Mantra, and Bhakti Yoga. Her classes are structured & energized, and accessible to all levels. She teaches a Hatha-Vinyasa style rooted in Indian tradition, marked by precise alignment, mindful breath, and a calm yet empowering energy."
  %}

  {% include facilitator_right.html
    name="Tilly Pegrum"
    quote="Terrible Art"
    quote_type="workshop"
    image="/assets/images/tilly-pegrum.jpg"
    handle="tillyartist"
    bio="Loosen up, forget about expectations of beauty and achievements. By completely abandoning the aim of creating something good, we are able to engage with the process of art making.
    The philosophy for her workshops is always about finding playful ways to encourage people to trust themselves and their artistic expression. She wishes to help remove the obstacles and limitations we build for ourselves so that we can really immerse ourselves into a creative flow state. It is marvelous what we can discover and learn about ourselves in this process.
    The workshop will be chaotic, fun and intuitive. It will be colorful and expressive, and a great group activity for bonding, leaving participants with a sense of liberation and lifted self-confidence."
  %}

  {% include facilitator_left.html
    name="Eda Tola"
    quote="Somatic Rituals"
    quote_type="job"
    image="/assets/images/eda-tola.jpg"
    handle="edatolala"
    bio="How do we take care of another body while listening to our own body?
  How can we experience connectedness through our body, movement, dance & sound ?
  How do we learn to ask, to listen, to respond with care?
  In this workshop we will use different practises and exercises of dance therapy and movement methods connecting us back with our bodies & where we are right now - connecting us with other bodies,
  listening rather then knowing and feeling rather than reacting.
  We will look for ways to open our bodies to movement, dance, sound and reconnect with our senses from a place of care and compassion."
  %}

  {% include facilitator_right.html
    name="Salomé Lind"
    quote="Sound & Voice Healing"
    quote_type="job"
    image="/assets/images/salome-lind.jpg"
    handle="healing_vibration.s"
    bio="Trained in sound healing and meditation, Salomé offers deeply nurturing sessions that invite relaxation, inner calm, and emotional release. Using mostly singing bowls, shruti box, flute, ocean drum, chimes, and voice, she creates a soft, welcoming soundscape designed to help participants feel lighter, grounded, and at peace. Her love for music and its therapeutic power is at the heart of every session she guides."
  %}

  {% include facilitator_left.html
    name="Lindsay Barrett"
    quote="Chef"
    quote_type="job"
    image="/assets/images/lindsey-barrett.jpg"
    handle="ohquelinda"
    bio="Lindsay is a seasoned traveller that has been inspired by many different cuisines. She creates delicious, healthy, seasonal meals that are vegan/vegetarian using fresh, locally sourced ingredients. "
  %}

</section>

{% include location.html %}
{% include pricing.html %}
{% include who-are-we.html %}

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Handle all anchor links that start with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
</script>
