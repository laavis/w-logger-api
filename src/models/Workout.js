import mongoose from 'mongoose';
import { Exercise } from './Exercise';
import { User } from './User';

// hey maybe add user who created the workout? because y not?
export const Workout = mongoose.model('workout', {
  exercises: [Exercise],
  createdBy: mongoose.Types.ObjectId, // not required cuz anonymity n stuff
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  category: {
    type: String,
    enum: ['gym', 'home', 'outdoors'],
  },
  target: {
    type: String,
    enum: ['chest', 'back', 'shoulders', 'biceps', 'legs', 'glutes', 'back', 'triceps', 'abs'],
  },
});
