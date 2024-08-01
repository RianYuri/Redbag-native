import fetchMock from 'fetch-mock';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function setupMocking(enableMock: boolean) {
  if (enableMock) {
    fetchMock.config.overwriteRoutes = true;

    fetchMock.mock('https://redbag-api-java.onrender.com/api/auth/register', {
      status: 200,
      body: {
        name: 'string',
        username: 'string',
        email: 'string',
        password: 'string',
      },
    });

    fetchMock.mock('https://redbag-api-java.onrender.com/api/auth/login', {
      status: 200,
      body: {
        token: 'string',
        userId: 0,
      },
    });

    fetchMock.mock('https://redbag-api-java.onrender.com/api/animals/:userId', {
      status: 200,
      body: [
        {
          id: 0,
          name: 'string',
          color: 'string',
          imageDetails: {
            publicId: 'string',
            url: 'string',
          },
          healthHistory: [
            {
              id: 0,
              healthStatus: 'HEALTHY',
              accuracy: 0,
              time: '2024-08-01T14:07:51.192Z',
              image: {
                publicId: 'string',
                url: 'string',
              },
            },
          ],
        },
      ],
    });

    fetchMock.mock(
      'https://redbag-api-java.onrender.com/api/animals/upload/:animalId',
      {
        status: 200,
        body: {
          id: 0,
          name: 'string',
          color: 'string',
          imageDetails: {
            publicId: 'string',
            url: 'string',
          },
          healthHistory: [
            {
              id: 0,
              healthStatus: 'HEALTHY',
              accuracy: 0,
              time: '2024-08-01T14:09:48.225Z',
              image: {
                publicId: 'string',
                url: 'string',
              },
            },
          ],
        },
      }
    );

    fetchMock.mock('https://redbag-api-java.onrender.com/predict/:animalId', {
      status: 200,
      body: {
        predicted_class: 'string',
        confidence: 0,
      },
    });

    fetchMock.mock('https://redbag-api-java.onrender.com/predict', {
      status: 200,
      body: {
        predicted_class: 'string',
        confidence: 0,
      },
    });

    fetchMock.mock('https://redbag-api-java.onrender.com/api/users', {
      status: 200,
      method: 'DELETE',
    });

    fetchMock.mock('https://redbag-api-java.onrender.com/api/users', {
      status: 200,
      body: {
        id: 0,
        name: 'string',
        username: 'string',
        email: 'string',
      },
      method: 'PUT',
    });

    fetchMock.mock(
      'https://redbag-api-java.onrender.com/api/animals/:userId/:animalId',
      {
        status: 200,
        method: 'DELETE',
      }
    );

    console.log('Mocking enabled.');
  } else {
    fetchMock.restore();
    console.log('Mocking disabled.');
  }
}

rl.question('Do you want to enable mocking? (yes/no): ', (answer) => {
  const enableMock = answer.toLowerCase() === 'yes';
  setupMocking(enableMock);
  rl.close();
});
