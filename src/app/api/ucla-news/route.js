export async function GET() {
  const articles = [
    {
      title: 'UCLA study reveals new memory circuit',
      link: 'https://newsroom.ucla.edu/releases/ucla-memory-circuit',
    },
    {
      title: 'New EEG techniques developed at UCLA',
      link: 'https://newsroom.ucla.edu/releases/ucla-eeg-tech',
    },
    {
      title: 'Neuroscience and AI: UCLA researchers collaborate',
      link: 'https://newsroom.ucla.edu/releases/ucla-ai-neuroscience',
    },
  ];

  return Response.json({ articles });
}