# DB設計
***
  
### usersテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| name | string | add_index: true, null: false |
| email | string | unique: true, null: false |
  
#### Association
* has_many :groups_users
* has_many :group, through: :groups_users
* has_many :messages
  

### groupsテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| name | string | add_index: true, null: false |
  
#### Association
* has_many :groups_users
* has_many :users, through: :groups_users
* has_many :messages
  

### groups_usersテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | references | foreignkey: true, null: false |
| group_id | references | foreignkey: true, null: false |
  
#### Association
* belongs_to :user
* belongs_to :group
  

### messagesテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| body | text | |
| image | string | |
| user_id | references | foreignkey: true, null: false |
| group_id | references | foreignkey: true, null: false |
  
#### Association
* belongs_to :user
* belongs_to :group