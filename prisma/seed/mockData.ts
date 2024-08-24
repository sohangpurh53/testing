import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f4649a37-df13-4490-a490-a3f325cc51bb', '1Daphne_Becker97@yahoo.com', 'Emily Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv54321', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('c1df11b9-edee-48cd-8dce-8c77c1a94df1', '8Gertrude_Wyman@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv67890', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('3ed876ff-5f9b-43e3-a0f9-f38215b31bad', '15Jared.Wisoky@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv12345', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('bdc9301c-5d47-46eb-a320-6c7ac466ccef', '29Johann.Koepp@hotmail.com', 'Emily Johnson', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv54321', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('26335c11-4164-4f9f-b1f0-02b34897bafa', '36Rey_Littel18@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('383e15c3-0c24-40f0-99b6-8f97c0862f1c', '43Fritz.Bashirian25@gmail.com', 'Emily Johnson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv09876', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '50Hosea.Harber@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv11223', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '57Brando.Hand@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv09876', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e9c68d12-f0ed-4562-bd64-9a155867c738', '64Maggie_Sawayn76@yahoo.com', 'Emily Johnson', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('bd4052d8-8edd-4085-b0a6-70868fb0a7a7', 'u1v2w3x4y5', '{"color":"anser","tego":"demitto","corroboro":"id"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('767c4176-a559-4b20-986d-e97203d9fcc2', 'p6q7r8s9t0', '{"velociter":"subnecto","ascit":"videlicet","demergo":"tabgo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6c6e1c46-6609-48cc-89c0-1598156b9ca8', 'k1l2m3n4o5', '{"antea":"depraedor","denego":"delectatio","deprecator":"at"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5f20b828-d2fc-461d-93c4-4056a870e5cd', 'f6g7h8i9j0', '{"animus":"cohors","doloremque":"argumentum","cuius":"stella","velociter":"animus","teres":"virgo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('09eb59ca-4d10-446e-af6a-5fab23e7e119', 'f6g7h8i9j0', '{"vindico":"accusator","ea":"ambulo","virtus":"clibanus","cometes":"beatus","aptus":"virgo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5c93454a-35ee-4c36-a8a2-28256935af6e', 'a1b2c3d4e5', '{"sto":"tredecim","vae":"sub","volup":"tot","cicuta":"valde","amita":"credo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f5a98d70-8fc7-44c1-ba25-d6308b16d771', 'f6g7h8i9j0', '{"claro":"utrum","pecto":"credo","summopere":"culpa","suscipit":"sint","sint":"utilis"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2c62ea6f-31fb-4b69-b34e-b161a875a980', 'u1v2w3x4y5', '{"alias":"torrens","urbs":"adhuc","cito":"terreo","pecco":"ustulo","ultio":"aperte"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('143fe433-ca85-4a54-8cd8-03baaabd7524', 'a1b2c3d4e5', '{"esse":"virtus","stella":"talis","quia":"vergo","causa":"aequitas","denuo":"volaticus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('cdc30781-85aa-4c18-9ff7-7e989fe0f51c', 'k1l2m3n4o5', '{"undique":"terminatio","corrupti":"atque","defleo":"temperantia","quo":"conventus","supra":"curso"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9e62dbe5-f820-46e4-88dc-4c48224b1c4f', 'Delta Audits', 'https://i.imgur.com/YfJQV5z.png?id=102');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a593d369-4672-4a27-8394-4e2fd0ec2d56', 'Alpha Accountancy', 'https://i.imgur.com/YfJQV5z.png?id=105');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3', 'Delta Audits', 'https://i.imgur.com/YfJQV5z.png?id=108');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ff3dc4ae-d296-49f9-b364-58961442a8e6', 'Beta Financials', 'https://i.imgur.com/YfJQV5z.png?id=111');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1455b520-d3df-4746-8ccd-07b00ec2ada4', 'Alpha Accountancy', 'https://i.imgur.com/YfJQV5z.png?id=114');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e', 'Beta Financials', 'https://i.imgur.com/YfJQV5z.png?id=117');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a010a6fe-48ad-4942-b5df-a9743e0d8b76', 'Gamma Ledger', 'https://i.imgur.com/YfJQV5z.png?id=120');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('89877b51-577c-48bd-af9d-6a7d3049366c', 'Alpha Accountancy', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4da626e3-cb34-458c-a5b8-ba8fc36372ce', 'Gamma Ledger', 'https://i.imgur.com/YfJQV5z.png?id=126');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8e62163a-15fb-4786-b906-485f54a415a2', 'Gamma Ledger', 'https://i.imgur.com/YfJQV5z.png?id=129');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('1422cb04-ad9e-404c-8e3b-31caf1f44f01', 'Accountant', '3ed876ff-5f9b-43e3-a0f9-f38215b31bad', '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('459cd8c2-5579-41a4-802a-e7144b73a2d5', 'Administrator', 'bdc9301c-5d47-46eb-a320-6c7ac466ccef', 'a010a6fe-48ad-4942-b5df-a9743e0d8b76');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('95e3c9c4-7190-497d-a6fa-0f4a674ced8e', 'Stock Manager', '26335c11-4164-4f9f-b1f0-02b34897bafa', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('64a64a86-ab0c-484b-8280-5387bb503c48', 'Stock Manager', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('37c98bea-4a2d-4396-8a48-179c05bbc302', 'Stock Manager', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('bb3f1576-4ddd-4849-b05a-2de18dbb0153', 'Stock Manager', 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '89877b51-577c-48bd-af9d-6a7d3049366c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f8bfd827-c0ed-4966-96c7-b8e7d12113ca', 'Accountant', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('42ee8174-80ae-41d8-a0df-19717dc53359', 'Administrator', 'bdc9301c-5d47-46eb-a320-6c7ac466ccef', 'ff3dc4ae-d296-49f9-b364-58961442a8e6');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ece6712e-be20-47ba-970f-43ea54f6c153', 'Auditor', 'f4649a37-df13-4490-a490-a3f325cc51bb', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2e92ee68-c386-4150-86a8-0d1738daf7f3', 'Administrator', 'f4649a37-df13-4490-a490-a3f325cc51bb', '3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e');

INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('9b605dbe-2e42-4e2e-8caf-3dab4e6f1790', 'USBC Hub', 'Comfortable and quiet keyboard', 399, 923, 'a010a6fe-48ad-4942-b5df-a9743e0d8b76');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('6cf7e71c-4f1e-48b1-9779-3891aacc06d4', 'Wireless Mouse', 'Multiport USBC hub', 267, 602, '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('259783e2-6bd0-4dee-908d-382089bc90b7', 'Ergonomic Keyboard', 'Comfortable and quiet keyboard', 88, 272, 'ff3dc4ae-d296-49f9-b364-58961442a8e6');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('6973c01e-41ad-41bc-b27c-4f0897963098', 'USBC Hub', 'Multiport USBC hub', 654, 487, 'ff3dc4ae-d296-49f9-b364-58961442a8e6');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('2b2c6601-01ad-441b-b50a-a88f6ae043a7', 'Bluetooth Speaker', 'High precision wireless mouse', 784, 155, '3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('39b5126e-b55d-42b7-9277-e9152f7e9c7f', 'Bluetooth Speaker', 'Portable Bluetooth speaker with excellent sound quality', 5, 457, '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('d1c122e2-30e3-49b6-8dba-e71b0da6c370', 'Bluetooth Speaker', 'Comfortable and quiet keyboard', 416, 541, '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('3a725837-2c1b-4854-94a1-75efdaa188cd', 'Ergonomic Keyboard', 'Portable Bluetooth speaker with excellent sound quality', 467, 332, '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('bd815762-48bb-4e3a-b2ea-684c42c8ed9e', '27inch Monitor', 'High precision wireless mouse', 408, 506, '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "Product" ("id", "name", "description", "price", "stockQuantity", "organizationId") VALUES ('252c1a3f-9bdd-42ae-a16c-ce78862a9130', 'Wireless Mouse', 'High precision wireless mouse', 182, 449, '89877b51-577c-48bd-af9d-6a7d3049366c');

INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('52c5db5d-55a6-4f38-b946-339329fbde9f', 133, '2025-08-03T22:57:16.725Z', '3ed876ff-5f9b-43e3-a0f9-f38215b31bad', '89877b51-577c-48bd-af9d-6a7d3049366c');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('3b3eb1a0-0129-47ac-84bb-c1914de88948', 550, '2025-05-05T22:48:15.049Z', '383e15c3-0c24-40f0-99b6-8f97c0862f1c', 'ff3dc4ae-d296-49f9-b364-58961442a8e6');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('f92ce924-2c8a-4dab-ba55-85d2eada4e0e', 618, '2025-01-19T08:26:17.252Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('edd54b32-12e8-42cc-8f2b-fdf5abc31bb4', 590, '2024-02-25T07:51:23.636Z', 'bdc9301c-5d47-46eb-a320-6c7ac466ccef', '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('6a2f692b-e5e6-4a7b-9ce9-5c3cb8423469', 468, '2025-06-06T21:01:29.602Z', 'e9c68d12-f0ed-4562-bd64-9a155867c738', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('2d0c7de2-57a7-4dcf-9546-833493df24e8', 777, '2023-09-03T12:30:28.883Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9e62dbe5-f820-46e4-88dc-4c48224b1c4f');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('e5dbc540-48d5-46ec-a835-3b0585a2edc3', 984, '2023-10-03T06:49:07.650Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('f15ea701-173e-493d-81c3-c54b5d5d855b', 16, '2024-11-10T11:43:35.671Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('7028c4c3-cf6d-4987-90dc-c5b272f578cf', 11, '2024-05-22T01:12:51.803Z', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '89877b51-577c-48bd-af9d-6a7d3049366c');
INSERT INTO "Transaction" ("id", "amount", "date", "userId", "organizationId") VALUES ('0a57a1aa-a153-4a70-825e-71505ddb2635', 733, '2024-09-12T02:45:35.745Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');

INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('6d7ad551-7793-4c2a-a1a0-1710523e0d22', 'We need to finalize the budget for Q4 by end of this week.', '2023-11-03T09:12:02.730Z', 'e9c68d12-f0ed-4562-bd64-9a155867c738', 'bdc9301c-5d47-46eb-a320-6c7ac466ccef', '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('93c858c1-e7e8-4111-b5f5-695799dabafd', 'We need to finalize the budget for Q4 by end of this week.', '2024-07-30T06:38:06.175Z', '26335c11-4164-4f9f-b1f0-02b34897bafa', 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('c899196f-31a7-44c1-a996-65fb1c7ad6bd', 'Could you send me the latest balance sheet', '2025-05-01T10:04:45.813Z', 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '383e15c3-0c24-40f0-99b6-8f97c0862f1c', '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('3cab9bf4-a371-4f9f-92b4-1f96394611d0', 'Can you update the stock report for last month', '2024-06-20T17:36:08.371Z', 'bdc9301c-5d47-46eb-a320-6c7ac466ccef', '26335c11-4164-4f9f-b1f0-02b34897bafa', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('c646a272-3f3e-4da1-a546-c7c2ae614593', 'We need to finalize the budget for Q4 by end of this week.', '2024-08-20T16:30:45.109Z', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '3ed876ff-5f9b-43e3-a0f9-f38215b31bad', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('c4c0ef40-7ee8-44b8-85ca-483679306100', 'We need to finalize the budget for Q4 by end of this week.', '2024-12-16T06:37:59.814Z', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', 'c1df11b9-edee-48cd-8dce-8c77c1a94df1', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('ea9c9ab2-bb0a-4a24-9168-3a763efd16f5', 'Can you update the stock report for last month', '2024-07-19T07:02:08.697Z', '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', 'c1df11b9-edee-48cd-8dce-8c77c1a94df1', 'ff3dc4ae-d296-49f9-b364-58961442a8e6');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('ba89775e-642f-43a5-b95f-f62affee9357', 'Could you send me the latest balance sheet', '2025-04-01T06:11:24.551Z', 'f4649a37-df13-4490-a490-a3f325cc51bb', '383e15c3-0c24-40f0-99b6-8f97c0862f1c', '3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('b499cb67-3731-48a9-8a18-df5e2522f807', 'We need to finalize the budget for Q4 by end of this week.', '2025-02-14T23:17:58.371Z', '383e15c3-0c24-40f0-99b6-8f97c0862f1c', 'e9c68d12-f0ed-4562-bd64-9a155867c738', '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "ChatMessage" ("id", "message", "timestamp", "senderId", "receiverId", "organizationId") VALUES ('d96c38e1-5441-4dc1-96b9-0a1b65807231', 'The client has requested a meeting tomorrow at 10 AM.', '2025-01-17T08:07:15.614Z', 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');

INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('263d4ab6-1f57-4112-9ad4-741b7478925d', 690, '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('848837e2-72d4-4264-a9b1-bafcf3f37698', 583, 'f4649a37-df13-4490-a490-a3f325cc51bb', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('1208f637-5d81-42ec-9b3f-02ca657e74d7', 536, '7ce040b9-45b9-4d96-83c3-c1a565c5aa68', '3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('bbd3c160-4bff-4ca9-ae3d-505ba6b8eec9', 302, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4da626e3-cb34-458c-a5b8-ba8fc36372ce');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('51f15938-0aaa-490d-9886-694de9d3fb99', 636, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1455b520-d3df-4746-8ccd-07b00ec2ada4');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('5d2a85fb-4289-4476-b6fb-596b732dfc40', 490, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8e62163a-15fb-4786-b906-485f54a415a2');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('2ac2d4b6-7a97-4941-9d94-722566a8b17a', 198, 'e9c68d12-f0ed-4562-bd64-9a155867c738', '3c8388f5-acbc-4bd6-8cd1-ed2a76a85c9e');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('75f7231d-cf8f-4c39-a503-42c4c0543c1f', 879, '3ed876ff-5f9b-43e3-a0f9-f38215b31bad', 'a593d369-4672-4a27-8394-4e2fd0ec2d56');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('cb69d241-f5b7-4145-81ec-70c3375fc8cf', 452, 'a8d8975c-719d-4672-bb4a-dc86ba8ccbde', '307f3e3a-6c1a-49e4-a9bf-8534d6bcf2d3');
INSERT INTO "Account" ("id", "balance", "userId", "organizationId") VALUES ('2894d32c-bfd3-4e0e-9955-3ecafcae5a5c', 596, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ff3dc4ae-d296-49f9-b364-58961442a8e6');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
