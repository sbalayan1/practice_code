class CreatePractices < ActiveRecord::Migration[6.1]
  def change
    create_table :practices do |t|

      t.timestamps
    end
  end
end
