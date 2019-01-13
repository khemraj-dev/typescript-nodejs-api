import { Request, Response } from 'express'
import * as mongoose from 'mongoose';

const uri: string = 'mongodb://localhost:27017/tsNodejsDB';

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});
mongoose.connection.on('disconnected', () => { });

export interface IBook extends mongoose.Document {
    title: string;
    author: number;
};

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    examSubjects: [
        {
            class: [
                {
                    section: [
                        {
                            subject: String
                        }
                    ]
                }
            ]
        }
    ]
});

const Book = mongoose.model('Book', BookSchema, 'Book');
export default Book;


// payload
// {
// 	"title": "BookTitle",
// 	"author": "BookAuther",
// 	"examSubjects": [{
// 			"class": [{
// 				"section": [{
// 						"subject": "hindi2"
// 					}, {
// 						"subject": "english"
// 					},
// 					{
// 						"subject": "science"
// 					}
// 				]
// 			}, {
// 				"section": [{
// 						"subject": "match"
// 					}, {
// 						"subject": "history"
// 					},
// 					{
// 						"subject": "computer"
// 					}
// 				]
// 			}]
// 		},
// 		{
// 			"class": [{
// 				"section": [{
// 						"subject": "hindi2"
// 					}, {
// 						"subject": "english"
// 					},
// 					{
// 						"subject": "science"
// 					}
// 				]
// 			}, {
// 				"section": [{
// 						"subject": "match"
// 					}, {
// 						"subject": "history"
// 					},
// 					{
// 						"subject": "computer"
// 					}
// 				]
// 			}]
// 		}
// 	]
// }