# DB設計
***
  
### usersテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| name | string | add_index: true, null: false |
| email | string | unique: true, null: false |
  
#### Association
* has_many :group_users
* has_many :group, through: :group_users
* has_many :messages
  

### groupsテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| group_name | string | add_index: true, null: false |
  
#### Association
* has_many :group_users
* has_many :users, through: :group_users
* has_many :messages
  

### groups_usersテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | foreignkey: true, null: false |
| group_id | integer | foreignkey: true, null: false |
  
#### Association
* belongs_to :user
* belongs_to :group
  

### messagesテーブル
***
  
| Column | Type | Options |
| ------ | ---- | ------- |
| body | text | null: false |
| image | string | |
| user_id | integer | foreignkey: true, null: false |
| group_id | integer | foreignkey: true, null: false |
  
#### Association
* belongs_to :user
* belongs_to :group