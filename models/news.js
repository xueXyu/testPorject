/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('News', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: 'title'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'news',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });
};
