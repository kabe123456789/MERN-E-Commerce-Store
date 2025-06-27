import ServiceCard from '../../components/ServiceCard.jsx';

const coachingPrograms = [
  { id: 'coach1', name: 'Self-Discovery Program', description: 'A 12-week transformative journey with Minaye to uncover your true potential and purpose.', price: 499.00, type: 'service' },
  { id: 'coach2', name: 'Relationship Vision (Couple)', description: 'An 8-week program for couples to build a shared vision and deepen their connection.', price: 699.00, type: 'service' },
  { id: 'coach3', name: 'Authentic Living Workshop', description: 'A 4-week intensive group workshop focused on aligning your actions with your core values.', price: 249.00, type: 'service' },
];

const CoachingPage = () => {
  return (
    <div className="page-content container">
      <h2>Minaye Life Design</h2>
      <p>
        Imagine waking up each day with a sense of clarity and purpose. Life design is about
        bringing that vision into reality. It's about intentionally shaping your choices – from
        your career to your relationships – in a way that aligns with your deepest values
        and helps you discover who you're truly meant to be. It's about letting your inner
        compass guide your outer actions, leading to a life that feels authentic and
        meaningful, day in and day out.
      </p>
      
      <h3>Coaching Programs</h3>
      <div className="items-grid">
        {coachingPrograms.map(program => (
          <ServiceCard key={program.id} service={program} />
        ))}
      </div>
    </div>
  );
};

export default CoachingPage;