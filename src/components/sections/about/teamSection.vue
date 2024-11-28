<script setup>

</script>

<template>
  <section class="team-section">
    <div class="team-header">
      <h3>Our Team</h3>
      <h1>You are into a great company</h1>
      <p>
        This is the paragraph where you can write more details about your team.
        Keep your user engaged by providing meaningful information.
      </p>
    </div>

    <div class="team-members">
      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Tina Andrew's photo" />
        <h4>Tina Andrew</h4>
        <p class="role">Founder & CEO</p>
        <p class="quote">
          Today you are you! That is truer than true! There is no one alive!
        </p>
      </div>

      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Phoenix Baker's photo" />
        <h4>Phoenix Baker</h4>
        <p class="role">Engineering Manager</p>
        <p class="quote">
          And I love you like Kanye loves Kanye. We need to restart that.
        </p>
      </div>

      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Lana Steiner's photo" />
        <h4>Lana Steiner</h4>
        <p class="role">Product Manager</p>
        <p class="quote">
          Artist is a term applied to a person who engages in an activity.
        </p>
      </div>

      <div class="team-member">
        <img src="https://via.placeholder.com/150" alt="Demi Wilkinson's photo" />
        <h4>Demi Wilkinson</h4>
        <p class="role">Frontend Developer</p>
        <p class="quote">
          Success is not final, failure is not fatal: it is the courage to
          continue.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  text-align: center;
  padding: 2rem 1rem;
}

.team-header h3 {
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 0.5rem;
}

.team-header h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.team-header p {
  font-size: 1rem;
  color: #666;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  max-width: 250px;
  text-align: left;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.team-member h4 {
  margin: 0.5rem 0 0.2rem;
  font-size: 1.2rem;
  color: #333;
}

.role {
  color: #555;
  font-style: italic;
  margin: 0.2rem 0;
}

.quote {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
}
</style>
