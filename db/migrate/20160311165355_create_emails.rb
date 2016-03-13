class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.text :main_name
      t.text :main_surname
      t.text :mail
      t.text :partner_name
      t.text :partner_surname
      t.text :comming
      t.text :bus
      t.timestamps
    end
  end
end
