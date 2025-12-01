import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '3m', target: 200 }, // spike period
    { duration: '1m', target: 10 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
  }
};

export default function () {
  http.get('http://urlshortener.local'); // use ingress domain
  sleep(1);
}
