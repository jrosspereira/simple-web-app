import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserProfileService {

  constructor() { }

  getUserProfiles(): Observable<UserProfile[]> {
    return of([{"id":"59914e16322c1b042d4fdf2b","name":{"first":"Shepard","middle":"V","last":"Potts"},"age":24,"email":"shepard.potts@stratpoint.us","picture":"http://placehold.it/50x50","phone":"+63 (881) 451-3628","address":"167 Woodhull Street, Oberlin, South Carolina, 3258","profile":"Tempor fugiat cillum occaecat laboris aliqua labore laboris qui velit culpa nostrud cupidatat. Reprehenderit nulla proident cupidatat commodo ex ad nostrud culpa adipisicing nostrud mollit elit adipisicing sint. Pariatur nulla cillum magna labore qui aliqua nulla nisi. Sint voluptate excepteur veniam sunt et ex est. Non et ea incididunt ut non. Nisi consectetur cupidatat aliquip laborum culpa nostrud fugiat ut culpa est ea veniam deserunt pariatur. Reprehenderit sit exercitation anim labore officia fugiat et amet sint do.","balance":"2,839.14","active":true,"blocked":false,"fullName":"Shepard V Potts","date_registered":"2015-08-14T15:08:31.632+0000"},{"id":"59914e1633eb7f7472171dd3","name":{"first":"Dina","middle":"B","last":"Johnson"},"age":32,"email":"dina.johnson@stratpoint.name","picture":"http://placehold.it/50x50","phone":"+63 (916) 448-3464","address":"704 Oliver Street, Leyner, Marshall Islands, 4403","profile":"Laboris anim culpa aliqua qui sint quis cupidatat. Aliquip consequat excepteur magna magna fugiat. Amet qui ut elit ipsum non adipisicing Lorem laboris.","balance":"3,664.29","active":false,"blocked":true,"fullName":"Dina B Johnson","date_registered":"2016-07-02T23:18:10.268+0000"},{"id":"59914e16ced6ae98492a6dd0","name":{"first":"Shannon","middle":"B","last":"Conrad"},"age":33,"email":"shannon.conrad@stratpoint.net","picture":"http://placehold.it/50x50","phone":"+63 (945) 484-2716","address":"833 Montague Terrace, Deercroft, North Dakota, 6139","profile":"Reprehenderit id consequat tempor pariatur ad ea proident aute fugiat consequat laboris officia minim non. Do irure esse sit amet aute enim labore incididunt tempor ut sunt irure. Ipsum amet dolore anim labore aute excepteur ea. Nostrud sint eiusmod anim pariatur excepteur magna reprehenderit.","balance":"1,409.18","active":false,"blocked":true,"fullName":"Shannon B Conrad","date_registered":"2014-06-19T13:04:44.971+0000"},{"id":"59914e16d7c9248527c3147d","name":{"first":"Fields","middle":"R","last":"Orr"},"age":56,"email":"fields.orr@stratpoint.me","picture":"http://placehold.it/50x50","phone":"+63 (858) 424-2401","address":"550 Royce Place, Roulette, New York, 2261","profile":"Labore nostrud veniam velit dolor mollit. Aliqua minim culpa cillum tempor sit. Adipisicing anim proident sint veniam consequat Lorem irure sit anim cillum. Anim ea dolor commodo id sint consectetur commodo. Exercitation cillum ea id esse aliquip.","balance":"2,245.26","active":true,"blocked":false,"fullName":"Fields R Orr","date_registered":"2015-10-25T17:14:27.950+0000"},{"id":"59914e16fceabe5d27fbb177","name":{"first":"Austin","middle":"M","last":"Burns"},"age":50,"email":"austin.burns@stratpoint.biz","picture":"http://placehold.it/50x50","phone":"+63 (838) 433-2866","address":"498 Windsor Place, Nescatunga, Idaho, 2878","profile":"Et deserunt est ipsum proident ea ex commodo. Proident eu aute incididunt excepteur nisi velit. Enim ex tempor ad id. Excepteur esse tempor deserunt minim anim Lorem cillum et et fugiat eiusmod tempor proident aliquip. Excepteur sunt aliquip pariatur excepteur excepteur duis cupidatat consectetur nisi id adipisicing esse mollit.","balance":"3,041.02","active":false,"blocked":false,"fullName":"Austin M Burns","date_registered":"2015-08-31T20:40:13.953+0000"},{"id":"59914e16734298f0ced4fc33","name":{"first":"Effie","middle":"M","last":"Palmer"},"age":55,"email":"effie.palmer@stratpoint.com","picture":"http://placehold.it/50x50","phone":"+63 (998) 429-3029","address":"273 Bushwick Court, Brethren, Nevada, 2725","profile":"Exercitation eu anim proident officia elit enim commodo. Commodo in deserunt enim sint laboris excepteur cupidatat ut dolore nisi. Deserunt aliquip sint quis in laboris eiusmod consequat dolor fugiat irure anim ea Lorem.","balance":"1,708.90","active":false,"blocked":false,"fullName":"Effie M Palmer","date_registered":"2014-07-24T07:08:43.822+0000"},{"id":"59914e167bac68914e781ee8","name":{"first":"Michele","middle":"G","last":"King"},"age":48,"email":"michele.king@stratpoint.tv","picture":"http://placehold.it/50x50","phone":"+63 (898) 470-3684","address":"578 Flatlands Avenue, Fredericktown, Puerto Rico, 3490","profile":"Proident mollit adipisicing veniam excepteur deserunt. Officia dolore adipisicing est eiusmod sunt quis dolore commodo et consectetur. Deserunt ex sit magna incididunt reprehenderit nostrud nulla consequat aliqua. Veniam qui labore eiusmod excepteur culpa mollit minim et non quis. Irure commodo nostrud commodo eiusmod deserunt ex sint sint laboris ad non.","balance":"3,857.59","active":false,"blocked":false,"fullName":"Michele G King","date_registered":"2017-04-19T17:53:04.728+0000"},{"id":"59914e160f6839ef1c988958","name":{"first":"Bonita","middle":"M","last":"Slater"},"age":38,"email":"bonita.slater@stratpoint.org","picture":"http://placehold.it/50x50","phone":"+63 (965) 487-2088","address":"532 Montauk Avenue, Alden, Oregon, 4597","profile":"Cillum magna ullamco velit commodo amet do sint excepteur magna cupidatat ipsum sint aute. Exercitation eu tempor occaecat sit velit enim deserunt laboris ullamco aute. Aute occaecat fugiat deserunt nisi ipsum sint velit irure aliqua eu tempor. Lorem aliqua ex exercitation mollit sunt id non ea ex labore. Ut veniam sunt laboris pariatur ipsum voluptate consequat ad in est officia.","balance":"1,660.72","active":true,"blocked":true,"fullName":"Bonita M Slater","date_registered":"2014-11-17T07:45:46.476+0000"},{"id":"59914e16edb3027134d5a507","name":{"first":"Irene","middle":"H","last":"Castaneda"},"age":30,"email":"irene.castaneda@stratpoint.io","picture":"http://placehold.it/50x50","phone":"+63 (983) 524-3143","address":"153 Roebling Street, Levant, Texas, 1014","profile":"Ea ut nulla amet elit ex quis ea laboris velit eiusmod. Mollit aliqua est culpa voluptate amet commodo quis exercitation consectetur nulla est dolor laboris. Officia in magna ea non commodo mollit nulla veniam. Voluptate tempor consectetur Lorem tempor laboris do ullamco officia enim ad consequat do dolor. Culpa esse cupidatat deserunt commodo voluptate veniam officia cillum duis id ipsum aliquip ipsum. Et mollit in non velit.","balance":"2,022.37","active":false,"blocked":false,"fullName":"Irene H Castaneda","date_registered":"2015-01-02T13:15:27.836+0000"},{"id":"59914e16488462d2d1d9a572","name":{"first":"Olsen","middle":"S","last":"Keith"},"age":25,"email":"olsen.keith@stratpoint.ca","picture":"http://placehold.it/50x50","phone":"+63 (978) 466-3474","address":"884 Knight Court, Como, Wyoming, 7709","profile":"Enim ea ex ut aliquip quis voluptate esse nostrud aliquip veniam ut velit consequat et. Sit esse quis et id nisi. Duis anim sunt incididunt mollit tempor ea qui deserunt pariatur quis dolore qui esse. Eu officia anim Lorem commodo deserunt amet sint magna ipsum. Duis reprehenderit deserunt officia enim ullamco sint commodo eu velit. Sit proident laboris nisi nulla commodo amet aute elit ea amet quis laborum.","balance":"3,753.11","active":true,"blocked":true,"fullName":"Olsen S Keith","date_registered":"2014-07-09T20:37:49.352+0000"},{"id":"59914e169d12e6157fe6e714","name":{"first":"Hester","middle":"F","last":"Baxter"},"age":37,"email":"hester.baxter@stratpoint.biz","picture":"http://placehold.it/50x50","phone":"+63 (907) 520-3745","address":"235 Brigham Street, Coloma, Vermont, 2610","profile":"Eiusmod id cupidatat minim reprehenderit. Ex irure pariatur est cillum est dolore ullamco Lorem. Veniam cillum dolore amet amet id fugiat. Consectetur aute excepteur amet qui excepteur do dolor eu deserunt enim veniam. Exercitation reprehenderit non ut mollit in occaecat anim esse irure proident labore ea. Aliquip nulla reprehenderit est do est ea. Adipisicing est fugiat consectetur laboris deserunt laborum consequat tempor cillum labore.","balance":"3,400.35","active":true,"blocked":false,"fullName":"Hester F Baxter","date_registered":"2015-09-29T23:48:59.232+0000"},{"id":"59914e165dd084a58966c5f8","name":{"first":"Fischer","middle":"G","last":"Pennington"},"age":51,"email":"fischer.pennington@stratpoint.co.uk","picture":"http://placehold.it/50x50","phone":"+63 (996) 480-3970","address":"315 Village Court, Devon, Maine, 5059","profile":"Veniam id occaecat amet duis aute. Duis deserunt officia fugiat amet reprehenderit et officia officia non et eiusmod nulla consectetur exercitation. Ex ut do tempor Lorem culpa sit cillum aliquip consequat incididunt ea.","balance":"1,507.59","active":false,"blocked":true,"fullName":"Fischer G Pennington","date_registered":"2015-07-03T14:35:51.433+0000"},{"id":"59914e16e9c72bb264063a3b","name":{"first":"Claudia","middle":"N","last":"Wolfe"},"age":60,"email":"claudia.wolfe@stratpoint.us","picture":"http://placehold.it/50x50","phone":"+63 (937) 587-3827","address":"379 Bancroft Place, Alderpoint, Rhode Island, 7461","profile":"Proident nisi quis dolor do velit dolor. Ad minim est enim sunt sit. Aute Lorem ut tempor ex. Nostrud dolor nisi eiusmod veniam. Non anim amet dolor duis. Reprehenderit dolor consectetur ipsum quis nulla irure deserunt eu in ipsum. Velit consequat amet minim ea ut cupidatat sunt dolore sunt exercitation.","balance":"3,203.10","active":true,"blocked":false,"fullName":"Claudia N Wolfe","date_registered":"2016-07-20T20:50:12.214+0000"},{"id":"59914e16520f61dc5d9d45d9","name":{"first":"Morales","middle":"H","last":"Hopper"},"age":49,"email":"morales.hopper@stratpoint.name","picture":"http://placehold.it/50x50","phone":"+63 (905) 514-3770","address":"930 Clermont Avenue, Watrous, Louisiana, 2421","profile":"Elit dolore aliqua incididunt ad exercitation Lorem reprehenderit aliqua qui dolor ut laboris officia. Occaecat duis voluptate velit magna. Minim reprehenderit mollit magna commodo mollit mollit labore Lorem nisi cillum. Ipsum deserunt in occaecat non sit exercitation tempor incididunt enim.","balance":"3,578.51","active":true,"blocked":true,"fullName":"Morales H Hopper","date_registered":"2014-06-04T00:35:54.666+0000"}]);
  }
}
